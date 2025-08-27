import { Hero } from '@/components/Hero';
import { CategoryTiles } from '@/components/CategoryTiles';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryTiles />
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How SuburbMates Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finding trusted local help has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search & Browse
              </h3>
              <p className="text-gray-600">
                Enter your suburb and the service you need. Browse verified local professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect & Compare
              </h3>
              <p className="text-gray-600">
                View profiles, read reviews, and contact multiple professionals to compare.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-success">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get It Done
              </h3>
              <p className="text-gray-600">
                Choose your preferred professional and get your job completed with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every professional on SuburbMates is verified and vetted to ensure you get quality service you can trust.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-success rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Professionals</h3>
                <p className="text-sm text-gray-600">All businesses are verified with valid ABN and credentials</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Local Focus</h3>
                <p className="text-sm text-gray-600">Connect with professionals in your specific suburb</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-sm text-gray-600">Regular quality checks and customer feedback monitoring</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-info rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Support Available</h3>
                <p className="text-sm text-gray-600">Our team is here to help if you need assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

