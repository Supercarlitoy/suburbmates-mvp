import { BookOpen, Download, ExternalLink, Users, Wrench, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Resources - Helpful Guides & Tools | SuburbMates',
  description: 'Access helpful resources, guides, and tools for both homeowners and service providers. Everything you need to succeed on SuburbMates.',
};

export default function ResourcesPage() {
  const homeownerResources = [
    {
      title: 'Hiring Your First Tradesperson',
      description: 'Complete guide to finding and hiring reliable tradespeople for your home projects.',
      category: 'Guide',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Home Maintenance Checklist',
      description: 'Seasonal maintenance tasks to keep your home in perfect condition year-round.',
      category: 'Checklist',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Budget Planning for Renovations',
      description: 'Learn how to budget effectively for home improvement and renovation projects.',
      category: 'Guide',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Understanding Building Permits',
      description: 'When you need permits, how to apply, and what to expect from council approvals.',
      category: 'Legal',
      downloadUrl: 'https://www.vic.gov.au/building-permits',
      external: true,
    },
  ];

  const businessResources = [
    {
      title: 'Getting Started on SuburbMates',
      description: 'Step-by-step guide to setting up your business profile and attracting customers.',
      category: 'Guide',
      downloadUrl: '#',
      external: false,
    },    {
      title: 'Professional Photography Tips',
      description: 'How to take great photos of your work to showcase your services effectively.',
      category: 'Marketing',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Customer Service Excellence',
      description: 'Best practices for delivering exceptional service and building customer loyalty.',
      category: 'Business',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Insurance Requirements Guide',
      description: 'Understanding public liability, professional indemnity, and other insurance needs.',
      category: 'Legal',
      downloadUrl: '#',
      external: false,
    },
    {
      title: 'Tax Deductions for Tradespeople',
      description: 'ATO guidelines on business expenses and tax deductions for service providers.',
      category: 'Finance',
      downloadUrl: 'https://www.ato.gov.au/business/business-deductions',
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Resources & Guides
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Everything you need to succeed on SuburbMates. From helpful guides to essential tools, 
              we've got resources for both homeowners and service providers.
            </p>
          </div>
        </div>
      </section>      {/* For Homeowners */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-centre mb-4">
              <Home className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">For Homeowners</h2>
            </div>
            <p className="text-lg text-gray-600">
              Helpful resources to make hiring tradespeople and maintaining your home easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeownerResources.map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-centre justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    {resource.external && (
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
                  <Link
                    href={resource.downloadUrl}
                    className="flex items-centre text-blue-600 hover:text-blue-700 font-medium"
                    {...(resource.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {resource.external ? 'Visit Resource' : 'Download Guide'}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* For Service Providers */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-centre mb-4">
              <Wrench className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">For Service Providers</h2>
            </div>
            <p className="text-lg text-gray-600">
              Resources to help you grow your business and deliver exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessResources.map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-centre justify-between mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    {resource.external && (
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
                  <Link
                    href={resource.downloadUrl}
                    className="flex items-centre text-green-600 hover:text-green-700 font-medium"
                    {...(resource.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {resource.external ? 'Visit Resource' : 'Download Guide'}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>      {/* Community Support */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <div className="flex items-centre justify-centre mb-4">
              <Users className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Community Support</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with other homeowners and service providers in our community forums and support channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="mb-3">Community Forums</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Join discussions, ask questions, and share experiences with other users.
                </p>
                <Link href="/community" className="text-blue-600 hover:text-blue-700 font-medium">
                  Visit Forums
                </Link>
              </CardContent>
            </Card>

            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="mb-3">Knowledge Base</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive articles and tutorials covering all aspects of the platform.
                </p>
                <Link href="/help" className="text-green-600 hover:text-green-700 font-medium">
                  Browse Articles
                </Link>
              </CardContent>
            </Card>            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="mb-3">Video Tutorials</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Step-by-step video guides to help you make the most of SuburbMates.
                </p>
                <Link href="/tutorials" className="text-purple-600 hover:text-purple-700 font-medium">
                  Watch Videos
                </Link>
              </CardContent>
            </Card>

            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Download className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="mb-3">Mobile App</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Download our mobile app for convenient access to all features on the go.
                </p>
                <Link href="/mobile" className="text-orange-600 hover:text-orange-700 font-medium">
                  Get the App
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Additional Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colours"
            >
              Contact Support
            </Link>
            <Link
              href="/feedback"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-blue-600 transition-colours"
            >
              Send Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}