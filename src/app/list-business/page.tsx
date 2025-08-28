'use client';

import { useState } from 'react';
import { CheckCircle, Star, Users, TrendingUp, MapPin, Phone, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ListBusinessPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    suburb: '',
    phone: '',
    email: '',
    website: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you! Your business application has been submitted. We\'ll review it within 24 hours and contact you with next steps.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      businessName: '',
      category: '',
      suburb: '',
      phone: '',
      email: '',
      website: '',
      description: '',
    });
  };  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-centre mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Grow Your Business
          <span className="text-primary block">In Your Community</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Join hundreds of local professionals who are building their customer base through SuburbMates. 
          Connect with neighbours who need your services.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-centre">
            <div className="text-2xl font-bold text-primary mb-1">850+</div>
            <div className="text-sm text-gray-600">Local Businesses</div>
          </div>
          <div className="text-centre">
            <div className="text-2xl font-bold text-accent mb-1">2,500+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-centre">
            <div className="text-2xl font-bold text-success mb-1">45</div>
            <div className="text-sm text-gray-600">Melbourne Suburbs</div>
          </div>
          <div className="text-centre">
            <div className="text-2xl font-bold text-info mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SuburbMates?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another directory. We're a community platform designed to help local businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Local Focus</h3>
            <div>
              <p className="text-sm text-gray-600">
                Connect with customers in your specific service areas. No wasted leads from distant suburbs.
              </p>
            </div>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Free to Start</h3>
            <div>
              <p className="text-sm text-gray-600">
                Create your business profile at no cost. Start connecting with local customers immediately.
              </p>
            </div>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Build Your Reputation</h3>
            <div>
              <p className="text-sm text-gray-600">
                Collect genuine reviews from local customers and build trust within your community.
              </p>
            </div>
          </Card>          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-info/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Users className="h-6 w-6 text-info" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Quality Customers</h3>
            <div>
              <p className="text-sm text-gray-600">
                Connect with verified local residents who are actively seeking your services.
              </p>
            </div>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Grow Your Business</h3>
            <div>
              <p className="text-sm text-gray-600">
                Access tools and insights to help you understand your market and grow your customer base.
              </p>
            </div>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Professional Profile</h3>
            <div>
              <p className="text-sm text-gray-600">
                Showcase your services with a professional profile that highlights your expertise.
              </p>
            </div>
          </Card>
        </div>
      </section>      {/* Application Form */}
      <section className="mb-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-centre mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">List Your Business</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to get started. We'll review your application and have you live within 24 hours.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Business Name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrician</option>
                    <option value="gardener">Gardener</option>
                    <option value="cleaner">Cleaner</option>
                    <option value="handyman">Handyman</option>
                    <option value="painter">Painter</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="locksmith">Locksmith</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="air-conditioning">Air Conditioning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Suburb *
                  </label>
                  <input
                    id="suburb"
                    name="suburb"
                    type="text"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="e.g., Melbourne, Richmond"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0412 345 678"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px] resize-y"
                  placeholder="Describe your services, experience, and what makes your business special..."
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  This will be displayed on your business profile. Include your experience, specialities, and service areas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• We'll review your application within 24 hours</li>
                  <li>• We may contact you to verify your business details</li>
                  <li>• Once approved, your profile will go live</li>
                  <li>• You'll receive login details to manage your listing</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </Card>
        </div>
      </section>      {/* Success Stories */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from local businesses who have grown their customer base through SuburbMates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-centre mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-centre justify-centre text-white font-bold mr-3">
                MJ
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mike Johnson</div>
                <div className="text-sm text-gray-600">Melbourne Plumbing Pro</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              "SuburbMates has been a game-changer for my business. I've connected with so many local customers 
              who found me through the platform. The quality of leads is excellent."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-centre mb-4">
              <div className="w-12 h-12 bg-success rounded-full flex items-centre justify-centre text-white font-bold mr-3">
                SG
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Green</div>
                <div className="text-sm text-gray-600">Green Thumb Gardens</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              "I love how SuburbMates focuses on local connections. My customers are all from nearby suburbs, 
              which makes scheduling and service delivery so much easier."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </Card>          <Card className="p-6">
            <div className="flex items-centre mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-centre justify-centre text-white font-bold mr-3">
                DL
              </div>
              <div>
                <div className="font-semibold text-gray-900">David Lee</div>
                <div className="text-sm text-gray-600">Spark Electric Solutions</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              "The verification process gave me confidence that I was joining a quality platform. 
              My customers appreciate knowing they're hiring verified professionals."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-centre bg-primary/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Grow Your Business?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of local professionals who are already connecting with customers in their neighbourhoods.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-centre">
          <button 
            className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base"
            onClick={() => document.getElementById('category')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </button>
          <a 
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-6 py-3 text-base"
          >
            View Pricing Plans
          </a>
        </div>
      </section>
    </div>
  );
}