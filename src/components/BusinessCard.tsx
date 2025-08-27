'use client';

import { motion } from 'framer-motion';
import { Phone, Globe, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatPhoneNumber, truncate } from '@/lib/utils';

interface Business {
  id: string;
  name: string;
  description?: string;
  website?: string;
  phone?: string;
  verified: boolean;
  category: {
    name: string;
  };
  suburb: {
    name: string;
    postcode: string;
  };
}

interface BusinessCardProps {
  business: Business;
  index?: number;
}

export function BusinessCard({ business, index = 0 }: BusinessCardProps) {
  const handleContact = (type: 'phone' | 'website') => {
    if (type === 'phone' && business.phone) {
      window.open(`tel:${business.phone}`, '_self');
    } else if (type === 'website' && business.website) {
      window.open(business.website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                {business.name}
                {business.verified && (
                  <CheckCircle className="h-4 w-4 text-success" aria-label="Verified business" />
                )}
              </CardTitle>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="h-3 w-3" />
                {business.suburb.name}, {business.suburb.postcode}
              </div>
            </div>
            <div className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
              {business.category.name}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {business.description && (
            <p className="text-sm text-gray-600 mb-4">
              {truncate(business.description, 120)}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {business.phone && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContact('phone')}
                className="flex items-center gap-1"
              >
                <Phone className="h-3 w-3" />
                {formatPhoneNumber(business.phone)}
              </Button>
            )}
            
            {business.website && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleContact('website')}
                className="flex items-center gap-1"
              >
                <Globe className="h-3 w-3" />
                Visit Website
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

