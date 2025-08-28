'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    'For Users': [
      { href: '/search', label: 'Find Services' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/safety', label: 'Safety Tips' },
    ],
    'For Businesses': [
      { href: '/list-business', label: 'List Your Business' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/resources', label: 'Resources' },
    ],
    'Support': [
      { href: '/help', label: 'Help Centre' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/feedback', label: 'Feedback' },
    ],
    'Legal': [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colours duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">SM</span>
              </div>
              <span className="font-bold text-lg text-gray-900">SuburbMates</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>© {currentYear} SuburbMates</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>in Melbourne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

