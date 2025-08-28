import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing Plans - Affordable Business Listings | SuburbMates',
  description: 'Choose the perfect plan for your business. From free listings to premium features, find the right option to grow your local customer base.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for getting started',
      icon: Star,
      color: 'gray',
      features: [
        'Business profile listing',
        'Contact information display',
        'Basic business description',
        'Customer reviews',
        'Mobile-friendly profile',
        'Search visibility',
      ],
      limitations: [
        'Limited to 1 service category',
        'Basic profile customisation',
        'Standard search ranking',
      ],
      cta: 'Get Started Free',
      popular: false,
    },    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'Most popular for growing businesses',
      icon: Zap,
      color: 'blue',
      features: [
        'Everything in Basic',
        'Up to 5 service categories',
        'Premium business description',
        'Photo gallery (up to 10 images)',
        'Customer enquiry management',
        'Business hours display',
        'Social media links',
        'Priority search ranking',
        'Customer messaging system',
        'Monthly analytics report',
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$59',
      period: 'per month',
      description: 'For established businesses',
      icon: Crown,
      color: 'purple',
      features: [
        'Everything in Professional',
        'Unlimited service categories',
        'Featured business listing',
        'Premium photo gallery (unlimited)',
        'Custom business website',
        'Advanced analytics dashboard',        'Lead generation tools',
        'Customer review management',
        'Priority customer support',
        'Marketing campaign assistance',
        'Quarterly strategy consultation',
        'Social media integration',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any plan. You only pay the monthly subscription fee.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.',
    },
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial of the Professional plan. No credit card required to begin.',
    },    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your account remains active until the end of your current billing period.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Choose the perfect plan to grow your business. Start free and upgrade as you scale.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular
                      ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                        Most Popular
                      </span>
                    </div>
                  )}                  <CardHeader className="text-centre pb-8">
                    <div
                      className={`mx-auto mb-4 flex h-12 w-12 items-centre justify-centre rounded-lg ${
                        plan.color === 'blue'
                          ? 'bg-blue-100 text-blue-600'
                          : plan.color === 'purple'
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period !== 'Forever' && (
                        <span className="text-gray-600">/{plan.period}</span>
                      )}
                    </div>
                    <p className="mt-2 text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Features included:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>                      {plan.limitations.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-gray-400 mr-3 mt-1">•</span>
                                <span className="text-gray-500 text-sm">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="pt-4">
                        <Link
                          href={plan.name === 'Premium' ? '/contact' : '/list-business'}
                          className={`block w-full rounded-lg px-4 py-3 text-centre font-semibold transition-colours ${
                            plan.popular
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>      {/* Features Comparison */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Compare Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-centre py-4 px-6 font-semibold text-gray-900">Basic</th>
                  <th className="text-centre py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-centre py-4 px-6 font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Business profile listing', basic: true, professional: true, premium: true },
                  { feature: 'Contact information display', basic: true, professional: true, premium: true },
                  { feature: 'Customer reviews', basic: true, professional: true, premium: true },
                  { feature: 'Service categories', basic: '1', professional: '5', premium: 'Unlimited' },
                  { feature: 'Photo gallery', basic: false, professional: '10 images', premium: 'Unlimited' },
                  { feature: 'Priority search ranking', basic: false, professional: true, premium: true },
                  { feature: 'Customer messaging', basic: false, professional: true, premium: true },
                  { feature: 'Analytics dashboard', basic: false, professional: 'Monthly', premium: 'Advanced' },
                  { feature: 'Featured listing', basic: false, professional: false, premium: true },
                  { feature: 'Custom website', basic: false, professional: false, premium: true },
                  { feature: 'Marketing assistance', basic: false, professional: false, premium: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-centre">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.basic}</span>
                      )}
                    </td>                    <td className="py-4 px-6 text-centre">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.professional}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-centre">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of local businesses already using SuburbMates to connect with customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <Link
              href="/list-business"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colours"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-blue-600 transition-colours"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}