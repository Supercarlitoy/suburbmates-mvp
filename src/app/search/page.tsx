import { Suspense } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { BusinessCard } from '@/components/BusinessCard';
import { SkeletonGrid } from '@/components/ui/SkeletonGrid';
import { db } from '@/lib/db';
import Image from 'next/image';

interface SearchPageProps {
  searchParams: Promise<{
    category?: string;
    suburb?: string;
  }>;
}

async function getBusinesses(category?: string, suburb?: string) {
  if (!category || !suburb) {
    return [];
  }

  try {
    const businesses = await db.business.findMany({
      where: {
        category: {
          slug: {
            equals: category,
          },
        },
        suburb: {
          name: {
            contains: suburb,
          },
        },
      },
      include: {
        category: true,
        suburb: true,
      },
      orderBy: {
        featured: 'desc',
      },
    });

    const businessesWithProperTypes = businesses.map(business => ({
      ...business,
      description: business.description ?? undefined,
      website: business.website ?? undefined,
      phone: business.phone ?? undefined,
      email: business.email ?? undefined,
      abn: business.abn ?? undefined,
    }));

    return businessesWithProperTypes;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return [];
  }
}

async function SearchResults({ category, suburb }: { category?: string; suburb?: string }) {
  const businesses = await getBusinesses(category, suburb);

  if (!category || !suburb) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Search for Local Services
        </h2>
        <p className="text-gray-600 mb-8">
          Enter a service type and your suburb to find trusted local professionals.
        </p>
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <Image
            src="/images/empty-state-search.png"
            alt="No results found"
            width={200}
            height={200}
            className="mx-auto mb-6 opacity-60"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            No results found
          </h2>
          <p className="text-gray-600 mb-8">
            We couldn't find any {category} services in {suburb}. Try searching for a different service or suburb.
          </p>
          <div className="text-sm text-gray-500">
            <p>Suggestions:</p>
            <ul className="mt-2 space-y-1">
              <li>• Check your spelling</li>
              <li>• Try a broader search term</li>
              <li>• Search in nearby suburbs</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {category} in {suburb}
        </h1>
        <p className="text-gray-600">
          Found {businesses.length} {businesses.length === 1 ? 'professional' : 'professionals'} in your area
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business, index) => (
          <BusinessCard key={business.id} business={business} index={index} />
        ))}
      </div>
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { category, suburb } = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Form */}
      <div className="mb-12">
        <SearchForm 
          defaultCategory={category || ''} 
          defaultSuburb={suburb || ''} 
        />
      </div>

      {/* Results */}
      <Suspense fallback={<SkeletonGrid count={6} />}>
        <SearchResults category={category} suburb={suburb} />
      </Suspense>
    </div>
  );
}

