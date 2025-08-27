import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const melbourneSuburbs = [
  { name: 'Melbourne', postcode: '3000' },
  { name: 'South Yarra', postcode: '3141' },
  { name: 'Richmond', postcode: '3121' },
  { name: 'Fitzroy', postcode: '3065' },
  { name: 'Carlton', postcode: '3053' },
  { name: 'St Kilda', postcode: '3182' },
  { name: 'Prahran', postcode: '3181' },
  { name: 'Toorak', postcode: '3142' },
  { name: 'Hawthorn', postcode: '3122' },
  { name: 'Kew', postcode: '3101' },
  { name: 'Camberwell', postcode: '3124' },
  { name: 'Brighton', postcode: '3186' },
  { name: 'Caulfield', postcode: '3162' },
  { name: 'Glen Waverley', postcode: '3150' },
  { name: 'Box Hill', postcode: '3128' },
  { name: 'Doncaster', postcode: '3108' },
  { name: 'Essendon', postcode: '3040' },
  { name: 'Moonee Ponds', postcode: '3039' },
  { name: 'Footscray', postcode: '3011' },
  { name: 'Williamstown', postcode: '3016' },
];

const serviceCategories = [
  { name: 'Plumber', slug: 'plumber', description: 'Plumbing repairs, installations, and maintenance' },
  { name: 'Electrician', slug: 'electrician', description: 'Electrical repairs, installations, and safety checks' },
  { name: 'Gardener', slug: 'gardener', description: 'Garden maintenance, landscaping, and lawn care' },
  { name: 'Cleaner', slug: 'cleaner', description: 'House cleaning, office cleaning, and deep cleaning services' },
  { name: 'Handyman', slug: 'handyman', description: 'General repairs, maintenance, and odd jobs' },
  { name: 'Painter', slug: 'painter', description: 'Interior and exterior painting services' },
  { name: 'Carpenter', slug: 'carpenter', description: 'Custom woodwork, furniture, and carpentry repairs' },
  { name: 'Locksmith', slug: 'locksmith', description: 'Lock repairs, installations, and emergency lockout services' },
  { name: 'Pest Control', slug: 'pest-control', description: 'Pest inspection, treatment, and prevention services' },
  { name: 'Air Conditioning', slug: 'air-conditioning', description: 'AC installation, repairs, and maintenance' },
];

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.business.deleteMany();
  await prisma.category.deleteMany();
  await prisma.suburb.deleteMany();

  console.log('🧹 Cleared existing data');

  // Seed suburbs
  console.log('🏘️  Seeding suburbs...');
  const createdSuburbs = await Promise.all(
    melbourneSuburbs.map(suburb =>
      prisma.suburb.create({
        data: suburb,
      })
    )
  );
  console.log(`✅ Created ${createdSuburbs.length} suburbs`);

  // Seed categories
  console.log('📂 Seeding categories...');
  const createdCategories = await Promise.all(
    serviceCategories.map(category =>
      prisma.category.create({
        data: category,
      })
    )
  );
  console.log(`✅ Created ${createdCategories.length} categories`);

  // Seed some sample businesses
  console.log('🏢 Seeding sample businesses...');
  
  const sampleBusinesses = [
    {
      name: 'Melbourne Plumbing Pro',
      description: 'Professional plumbing services with 15+ years experience. Emergency callouts available.',
      website: 'https://melbourneplumbingpro.com.au',
      phone: '0412345678',
      email: 'info@melbourneplumbingpro.com.au',
      abn: '12345678901',
      verified: true,
      featured: true,
      categoryName: 'Plumber',
      suburbName: 'Melbourne',
    },
    {
      name: 'Spark Electric Solutions',
      description: 'Licensed electricians providing safe and reliable electrical services across Melbourne.',
      website: 'https://sparkelectricsolutions.com.au',
      phone: '0423456789',
      email: 'contact@sparkelectricsolutions.com.au',
      abn: '23456789012',
      verified: true,
      featured: false,
      categoryName: 'Electrician',
      suburbName: 'South Yarra',
    },
    {
      name: 'Green Thumb Gardens',
      description: 'Expert garden maintenance and landscaping services. Transform your outdoor space.',
      website: 'https://greenthumbgardens.com.au',
      phone: '0434567890',
      email: 'hello@greenthumbgardens.com.au',
      abn: '34567890123',
      verified: true,
      featured: true,
      categoryName: 'Gardener',
      suburbName: 'Richmond',
    },
    {
      name: 'Crystal Clean Services',
      description: 'Professional cleaning services for homes and offices. Eco-friendly products used.',
      phone: '0445678901',
      email: 'info@crystalcleanservices.com.au',
      abn: '45678901234',
      verified: false,
      featured: false,
      categoryName: 'Cleaner',
      suburbName: 'Fitzroy',
    },
    {
      name: 'Fix It Fast Handyman',
      description: 'Quick and reliable handyman services. No job too small!',
      phone: '0456789012',
      email: 'jobs@fixitfast.com.au',
      abn: '56789012345',
      verified: true,
      featured: false,
      categoryName: 'Handyman',
      suburbName: 'Carlton',
    },
  ];

  for (const business of sampleBusinesses) {
    const category = createdCategories.find(c => c.name === business.categoryName);
    const suburb = createdSuburbs.find(s => s.name === business.suburbName);

    if (category && suburb) {
      await prisma.business.create({
        data: {
          name: business.name,
          description: business.description,
          website: business.website,
          phone: business.phone,
          email: business.email,
          abn: business.abn,
          verified: business.verified,
          featured: business.featured,
          categoryId: category.id,
          suburbId: suburb.id,
        },
      });
    }
  }

  console.log(`✅ Created ${sampleBusinesses.length} sample businesses`);
  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

