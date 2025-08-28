'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          Get in
          <span className="text-primary block">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question, suggestion, or need help? We're here to assist you. 
          Choose the best way to reach us below.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-centre hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Email Support</h3>
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Get detailed help and support via email. Perfect for complex questions or account issues.
              </p>
              <p className="font-medium text-primary mb-2">support@suburbmates.com</p>
              <p className="text-xs text-gray-500">Response within 24 hours</p>
            </div>
          </Card>

          <Card className="p-6 text-centre hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Live Chat</h3>
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our support team in real-time for quick questions and immediate assistance.
              </p>
              <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 px-3 py-1.5 text-sm mb-2">
                Start Chat
              </button>
              <p className="text-xs text-gray-500">Mon-Fri 9am-6pm AEST</p>
            </div>
          </Card>

          <Card className="p-6 text-centre hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Phone Support</h3>
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Speak directly with our support team for urgent matters or detailed discussions.
              </p>
              <p className="font-medium text-accent mb-2">1300 SUBURB</p>
              <p className="text-xs text-gray-500">Mon-Fri 9am-6pm AEST</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                The more details you provide, the better we can help you.
              </p>

              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
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
                        placeholder="john@example.com"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
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
                        <option value="general">General Enquiry</option>
                        <option value="business">Business Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="safety">Safety Concern</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Enquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief description of your enquiry"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[150px] resize-y"
                      placeholder="Please provide as much detail as possible about your enquiry..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-centre justify-centre flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600 text-sm">
                      Level 12, 123 Collins Street<br />
                      Melbourne VIC 3000<br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-centre justify-centre flex-shrink-0">
                    <Clock className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM AEST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM AEST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-centre justify-centre flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Emergency Contact</h3>
                    <p className="text-gray-600 text-sm">
                      For urgent safety concerns or platform issues:<br />
                      <span className="font-medium text-accent">1300 URGENT</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <Card className="p-6 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-4">Expected Response Times</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">General Enquiries</span>
                    <span className="font-medium">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Business Support</span>
                    <span className="font-medium">12-24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technical Issues</span>
                    <span className="font-medium">4-12 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Safety Concerns</span>
                    <span className="font-medium text-error">Immediate</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You might find your answer faster in our help centre. Here are some common topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Account Issues',
              description: 'Login problems, password resets, account settings',
              link: '/help#account'
            },
            {
              title: 'Business Listings',
              description: 'How to list, edit, or manage your business profile',
              link: '/help#business'
            },
            {
              title: 'Safety & Trust',
              description: 'Verification process, reporting issues, safety tips',
              link: '/help#safety'
            },
            {
              title: 'Technical Support',
              description: 'Website issues, mobile app problems, browser compatibility',
              link: '/help#technical'
            }
          ].map((topic, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
              <button className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 border border-gray-300 bg-transparent hover:bg-gray-50 px-3 py-1.5 text-sm">
                View Help Articles
              </button>
            </Card>
          ))}
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section>
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-centre">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with us on social media for updates, tips, and community discussions.
            </p>
            
            <div className="flex justify-centre space-x-6">
              <a href="#" className="flex items-centre space-x-2 text-gray-600 hover:text-primary transition-colours">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-centre justify-centre">
                  <span className="text-blue-600 font-bold text-sm">f</span>
                </div>
                <span>Facebook</span>
              </a>
              
              <a href="#" className="flex items-centre space-x-2 text-gray-600 hover:text-primary transition-colours">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-centre justify-centre">
                  <span className="text-blue-600 font-bold text-sm">in</span>
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a href="#" className="flex items-centre space-x-2 text-gray-600 hover:text-primary transition-colours">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-centre justify-centre">
                  <span className="text-pink-600 font-bold text-sm">ig</span>
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}