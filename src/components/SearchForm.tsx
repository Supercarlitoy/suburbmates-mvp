'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

interface SearchFormProps {
  className?: string;
  defaultCategory?: string;
  defaultSuburb?: string;
}

export function SearchForm({ className, defaultCategory = '', defaultSuburb = '' }: SearchFormProps) {
  const [category, setCategory] = useState(defaultCategory);
  const [suburb, setSuburb] = useState(defaultSuburb);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!category.trim() || !suburb.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const searchParams = new URLSearchParams({
      category: category.trim(),
      suburb: suburb.trim(),
    });
    
    router.push(`/search?${searchParams.toString()}`);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="What service do you need?"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter your suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <Button
        type="submit"
        size="lg"
        loading={isLoading}
        className="w-full md:w-auto"
      >
        {isLoading ? 'Searching...' : 'Find Local Helpers'}
      </Button>
    </form>
  );
}

