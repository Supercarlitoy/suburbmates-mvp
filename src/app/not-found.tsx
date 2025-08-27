import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
          
          <div className="text-sm text-gray-500">
            <p>Or try searching for local services:</p>
            <Link href="/search" className="text-primary hover:underline">
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

