'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronRight, MessageCircle, Phone, Mail, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('getting-started');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      questions: [
        {
          question: 'How do I find services in my area?',
          answer: 'Simply enter your suburb in the search box on our homepage, select the service category you need, and browse through verified local professionals. You can filter results by ratings, distance, and other criteria.'
        },
        {
          question: 'How do I know if a business is trustworthy?',
          answer: 'All businesses on SuburbMates are verified with valid ABN, insurance, and relevant licences. Look for the verification badge, read customer reviews, and check their profile completeness.'
        },
        {
          question: 'Is SuburbMates free to use?',
          answer: 'Yes! Finding and contacting local services through SuburbMates is completely free for customers. Businesses may choose paid plans for enhanced features.'
        },
        {
          question: 'How do I contact a business?',
          answer: 'Click on any business profile to view their contact information including phone number, email, and website. You can contact them directly using your preferred method.'
        }
      ]
    },
    {
      id: 'for-businesses',
      title: 'For Businesses',
      icon: MessageCircle,
      questions: [
        {
          question: 'How do I list my business?',
          answer: 'Click "List Your Business" in the footer, fill out the application form with your business details, and submit for review. We\'ll verify your information and have you live within 24 hours.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'You\'ll need your business name, ABN, contact details, service categories, description, and proof of insurance. Additional documents may be required for licensed trades.'
        },
        {
          question: 'How much does it cost?',
          answer: 'Basic listings are free forever. Professional ($29/month) and Premium ($59/month) plans offer enhanced features like priority ranking, photo galleries, and advanced analytics.'
        },
        {
          question: 'How do I get more customers?',
          answer: 'Complete your profile with photos and detailed descriptions, respond quickly to enquiries, maintain excellent reviews, and consider upgrading to a paid plan for better visibility.'
        },
        {
          question: 'Can I edit my listing after it\'s live?',
          answer: 'Yes! You can update your business information, photos, description, and contact details anytime through your business dashboard.'
        }
      ]
    },
    {
      id: 'safety-trust',
      title: 'Safety & Trust',
      icon: Phone,
      questions: [
        {
          question: 'How does SuburbMates verify businesses?',
          answer: 'We verify all businesses through ABN checks, insurance verification, licence validation (where required), and ongoing performance monitoring.'
        },
        {
          question: 'What should I do if I have a problem with a service?',
          answer: 'First, try to resolve the issue directly with the business. If unsuccessful, contact our support team with details, and we\'ll help mediate or investigate.'
        },
        {
          question: 'How do I report a suspicious business?',
          answer: 'Use our feedback form or contact support immediately. Provide specific details about your concerns, and we\'ll investigate promptly.'
        },
        {
          question: 'Are customer reviews verified?',
          answer: 'We monitor reviews for authenticity and remove fake or inappropriate content. Reviews come from real customer interactions tracked through our platform.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Mail,
      questions: [
        {
          question: 'The website isn\'t working properly',
          answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If problems persist, contact our technical support team.'
        },
        {
          question: 'I can\'t find a business I\'m looking for',
          answer: 'Try different search terms, check spelling, or browse by category. Not all businesses may be listed yet - you can suggest businesses to join SuburbMates.'
        },
        {
          question: 'How do I leave a review?',
          answer: 'After using a service, visit the business profile and click "Write a Review." You\'ll need to provide details about your experience and rate the service.'
        },
        {
          question: 'Can I use SuburbMates on my mobile phone?',
          answer: 'Yes! SuburbMates is fully optimised for mobile devices. You can access all features through your mobile browser.'
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-centre mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Help
          <span className="text-primary block">Centre</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Find answers to common questions, get help with your account, or learn how to make the most of SuburbMates.
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-centre hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get personalised help from our support team
            </p>
            <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-3 py-1.5 text-sm">
              Contact Us
            </button>
          </Card>

          <Card className="p-6 text-centre hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Phone className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Report an Issue</h3>
            <p className="text-sm text-gray-600 mb-4">
              Report problems or safety concerns
            </p>
            <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-3 py-1.5 text-sm">
              Report Issue
            </button>
          </Card>

          <Card className="p-6 text-centre hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Book className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Safety Guide</h3>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to stay safe when hiring services
            </p>
            <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-3 py-1.5 text-sm">
              View Guide
            </button>
          </Card>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse common questions by category or use the search above to find specific answers.
          </p>
        </div>

        <div className="space-y-6">
          {(searchQuery ? filteredCategories : helpCategories).map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <Card key={category.id} className="overflow-hidden">
                <div 
                  className="cursor-pointer hover:bg-gray-50 transition-colours p-6"
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                >
                  <div className="flex items-centre justify-between">
                    <div className="flex items-centre">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-centre justify-centre mr-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      {category.questions.map((qa, index) => (
                        <div key={index} className="border-l-4 border-primary/20 pl-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{qa.question}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{qa.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {searchQuery && filteredCategories.length === 0 && (
          <div className="text-centre py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              Try different search terms or browse the categories above.
            </p>
            <button 
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Contact Options */}
      <section className="mb-16">
        <Card className="p-8 bg-gray-50">
          <div className="text-centre mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-centre">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get detailed help via email
              </p>
              <p className="text-sm font-medium text-primary">support@suburbmates.com</p>
              <p className="text-xs text-gray-500">Response within 24 hours</p>
            </div>

            <div className="text-centre">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our support team
              </p>
              <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 px-3 py-1.5 text-sm mb-2">
                Start Chat
              </button>
              <p className="text-xs text-gray-500">Mon-Fri 9am-6pm AEST</p>
            </div>

            <div className="text-centre">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Speak directly with our team
              </p>
              <p className="text-sm font-medium text-accent">1300 SUBURB</p>
              <p className="text-xs text-gray-500">Mon-Fri 9am-6pm AEST</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Popular Articles */}
      <section>
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Help Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most helpful articles based on what other users are reading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'How to Choose the Right Service Provider',
              description: 'Tips for evaluating and selecting the best professional for your needs',
              category: 'Customer Guide',
              readTime: '5 min read'
            },
            {
              title: 'Understanding Our Verification Process',
              description: 'Learn how we verify businesses and what the badges mean',
              category: 'Trust & Safety',
              readTime: '3 min read'
            },
            {
              title: 'Getting the Most from Your Business Listing',
              description: 'Best practices for businesses to attract more customers',
              category: 'Business Guide',
              readTime: '8 min read'
            },
            {
              title: 'Pricing Guidelines for Local Services',
              description: 'Understanding fair pricing for different types of services',
              category: 'Pricing',
              readTime: '6 min read'
            },
            {
              title: 'Resolving Issues with Service Providers',
              description: 'Steps to take if you\'re not satisfied with a service',
              category: 'Support',
              readTime: '4 min read'
            },
            {
              title: 'Mobile App Features and Tips',
              description: 'Make the most of SuburbMates on your mobile device',
              category: 'Technical',
              readTime: '3 min read'
            }
          ].map((article, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-centre justify-between mb-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{article.description}</p>
              <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-3 py-1.5 text-sm">
                Read Article
              </button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
