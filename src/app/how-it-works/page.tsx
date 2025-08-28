import { Search, Users, CheckCircle, MessageCircle, Star, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'How SuburbMates Works - Simple Steps to Find Local Help',
  description: 'Learn how SuburbMates connects you with trusted local professionals in just a few simple steps.',
};

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-centre mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How SuburbMates
          <span className="text-primary block">Works</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Finding trusted local help has never been easier. Follow these simple steps to connect 
          with verified professionals in your neighbourhood.
        </p>
      </section>

      {/* Main Process */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-centre p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-centre justify-centre text-white font-bold">
                1
              </div>
            </div>
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-centre justify-centre mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Search & Browse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enter your suburb and the service you need. Browse through verified local professionals 
                with detailed profiles, photos, and customer reviews.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Filter by verified businesses</li>
                <li>• View ratings and reviews</li>
                <li>• Check service areas</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-centre p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-centre justify-centre text-white font-bold">
                2
              </div>
            </div>
            <CardHeader>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-centre justify-centre mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Connect & Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Contact multiple professionals to compare quotes, availability, and approach. 
                Ask questions and get detailed information about their services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Direct phone contact</li>
                <li>• Visit business websites</li>
                <li>• Compare multiple quotes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="text-centre p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-success rounded-full flex items-centre justify-centre text-white font-bold">
                3
              </div>
            </div>
            <CardHeader>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-centre justify-centre mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <CardTitle>Get It Done</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Choose your preferred professional and get your job completed with confidence. 
                All our businesses are verified and committed to quality service.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Verified professionals only</li>
                <li>• Quality guarantee</li>
                <li>• Community support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every professional on SuburbMates goes through our comprehensive verification process 
            to ensure you get quality service you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-centre">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Business Verification</h3>
            <p className="text-sm text-gray-600">
              All businesses are verified with valid ABN, insurance, and relevant licences where required.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-centre">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community Reviews</h3>
            <p className="text-sm text-gray-600">
              Real reviews from local customers help you make informed decisions about service providers.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-centre">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality Monitoring</h3>
            <p className="text-sm text-gray-600">
              We continuously monitor service quality and remove businesses that don't meet our standards.
            </p>
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-centre">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">For Local Businesses</h2>
            <p className="text-lg text-gray-600 mb-6">
              Are you a skilled professional looking to grow your business within your local community? 
              SuburbMates helps you connect with neighbours who need your services.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-centre justify-centre flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Business Listing</h3>
                  <p className="text-sm text-gray-600">Create your profile and start connecting with local customers at no cost.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-centre justify-centre flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Focus</h3>
                  <p className="text-sm text-gray-600">Connect with customers in your specific service areas and suburbs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-centre justify-centre flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Build Your Reputation</h3>
                  <p className="text-sm text-gray-600">Collect reviews and build trust within your local community.</p>
                </div>
              </div>
            </div>

            <Link href="/list-business" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base">
              List Your Business
            </Link>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="text-centre">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Community</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-centre">
                  <div className="text-3xl font-bold text-primary mb-1">850+</div>
                  <div className="text-sm text-gray-600">Local Businesses</div>
                </div>
                <div className="text-centre">
                  <div className="text-3xl font-bold text-accent mb-1">2,500+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Join hundreds of local businesses already growing their customer base through SuburbMates.
              </p>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-4 py-2 text-sm">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-centre bg-primary/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of Melbourne residents who have found trusted local help through SuburbMates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-centre">
          <Link href="/search" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base">
            Find Local Services
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-6 py-3 text-base">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
