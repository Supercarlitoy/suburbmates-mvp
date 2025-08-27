'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const popularCategories = [
  {
    name: 'Plumber',
    slug: 'plumber',
    icon: '/images/category-plumber.png',
    description: 'Pipes, leaks, and water systems'
  },
  {
    name: 'Electrician',
    slug: 'electrician', 
    icon: '/images/category-electrician.png',
    description: 'Wiring, outlets, and electrical repairs'
  },
  {
    name: 'Gardener',
    slug: 'gardener',
    icon: '/images/category-gardener.png', 
    description: 'Lawn care, pruning, and landscaping'
  },
  {
    name: 'Cleaner',
    slug: 'cleaner',
    icon: '/images/category-plumber.png', // Reusing for now
    description: 'House cleaning and maintenance'
  },
  {
    name: 'Handyman',
    slug: 'handyman',
    icon: '/images/category-electrician.png', // Reusing for now
    description: 'General repairs and odd jobs'
  },
  {
    name: 'Painter',
    slug: 'painter',
    icon: '/images/category-gardener.png', // Reusing for now
    description: 'Interior and exterior painting'
  }
];

export function CategoryTiles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find trusted local professionals for the services you need most
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <Link href={`/search?category=${category.slug}`}>
                <Card className="text-center p-4 h-full hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50">
                      <Image
                        src={category.icon}
                        alt={`${category.name} icon`}
                        fill
                        sizes="48px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm category-title">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-800 mt-1 category-description">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

