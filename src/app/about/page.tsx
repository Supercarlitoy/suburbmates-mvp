import Image from 'next/image';
import { Users, Heart, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'About SuburbMates - Connecting Melbourne Communities',
  description: 'Learn about SuburbMates mission to connect Melbourne residents with trusted local professionals in their neighbourhoods.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-centre mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Connecting Melbourne's
          <span className="text-primary block">Neighbourhoods</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We believe every neighbourhood has hidden gems—skilled professionals who care about their community. 
          SuburbMates makes it easy to discover and connect with these local heroes.
        </p>
        <div className="relative w-full max-w-2xl mx-auto h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/hero-abstract.png"
            alt="Community connection illustration"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-centre">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                SuburbMates was born from a simple frustration: finding reliable local help shouldn't be a gamble. 
                As Melbourne residents ourselves, we've all been there—scrolling through endless online reviews, 
                wondering if that plumber or gardener is actually trustworthy.
              </p>
              <p>
                We realised that the best recommendations have always come from neighbours. The challenge was 
                connecting people within their own suburbs to discover these trusted professionals who might 
                be just around the corner.
              </p>
              <p>
                Today, SuburbMates is more than a directory—it's a community platform that strengthens 
                neighbourhood connections whilst supporting local businesses. Every interaction builds trust, 
                and every successful service strengthens our local economy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-centre p-6">
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-gray-600">Melbourne Residents</div>
            </Card>
            <Card className="text-centre p-6">
              <div className="text-3xl font-bold text-accent mb-2">850+</div>
              <div className="text-sm text-gray-600">Local Businesses</div>
            </Card>
            <Card className="text-centre p-6">
              <div className="text-3xl font-bold text-success mb-2">45</div>
              <div className="text-sm text-gray-600">Melbourne Suburbs</div>
            </Card>
            <Card className="text-centre p-6">
              <div className="text-3xl font-bold text-info mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from how we verify businesses to how we design our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mb-3">Community First</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                We prioritise neighbourhood connections and local relationships over corporate profits.
              </p>
            </CardContent>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <CardTitle className="mb-3">Trust & Safety</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                Every business is verified, and we maintain strict quality standards for our community.
              </p>
            </CardContent>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="mb-3">Local Love</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                We celebrate and support local businesses that make our neighbourhoods special.
              </p>
            </CardContent>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-info/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Zap className="h-6 w-6 text-info" />
            </div>
            <CardTitle className="mb-3">Simple & Fast</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                Finding local help should be quick and easy, not a time-consuming research project.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-centre">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            To make finding trusted local help as natural as asking a neighbour for a recommendation, 
            whilst building stronger, more connected communities across Melbourne.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-centre">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Strengthen Neighbourhoods</h3>
              <p className="text-sm text-gray-600">
                Every connection made through SuburbMates strengthens the fabric of our local communities.
              </p>
            </div>
            <div className="text-centre">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Local Business</h3>
              <p className="text-sm text-gray-600">
                We help skilled local professionals grow their businesses within their own communities.
              </p>
            </div>
            <div className="text-centre">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Create Trust</h3>
              <p className="text-sm text-gray-600">
                Through verification and community feedback, we build lasting trust between neighbours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="text-centre">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you're looking for local help or you're a skilled professional wanting to serve your community, 
          SuburbMates is here to connect you with your neighbours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-centre">
          <a
            href="/search"
            className="btn btn-primary px-8 py-3 text-base"
          >
            Find Local Help
          </a>
          <a
            href="/list-business"
            className="btn btn-outline px-8 py-3 text-base"
          >
            List Your Business
          </a>
        </div>
      </section>
    </div>
  );
}
