import { MessageSquare, Star, AlertTriangle, Lightbulb, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Feedback - Help Us Improve SuburbMates',
  description: 'Share your feedback, report issues, or suggest improvements. Your input helps us make SuburbMates better for everyone.',
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-centre">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              We Value Your Feedback
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Help us improve SuburbMates by sharing your thoughts, reporting issues, or suggesting new features. 
              Every piece of feedback helps us serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="mb-3">General Feedback</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Share your overall experience and suggestions for improvement.
                </p>
              </CardContent>
            </Card>            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="mb-3">Report an Issue</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Let us know about bugs, safety concerns, or platform issues.
                </p>
              </CardContent>
            </Card>

            <Card className="text-centre p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="mb-3">Feature Request</CardTitle>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Suggest new features or improvements to existing functionality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Form */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-centre">Share Your Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Feedback Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="safety">Safety Concern</option>
                    <option value="business">Business Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Brief description of your feedback"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical"
                    placeholder="Please provide detailed information about your feedback, including steps to reproduce if reporting a bug."
                    required
                  ></textarea>
                </div>                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                    Priority Level
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="low">Low - General suggestion</option>
                    <option value="medium" selected>Medium - Would like improvement</option>
                    <option value="high">High - Significant impact</option>
                    <option value="urgent">Urgent - Critical issue</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="followup"
                    name="followup"
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="followup" className="text-sm text-gray-700">
                    I would like to be contacted for follow-up questions about this feedback
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-centre justify-centre px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colours"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Feedback
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-centre mb-12">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-centre">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-centre justify-centre mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Review</h3>
              <p className="text-gray-600">
                Our team carefully reviews all feedback within 24-48 hours.
              </p>
            </div>            <div className="text-centre">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-centre justify-centre mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Respond</h3>
              <p className="text-gray-600">
                You'll receive an acknowledgement and, if needed, a follow-up from our team.
              </p>
            </div>
            <div className="text-centre">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-centre justify-centre mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Improve</h3>
              <p className="text-gray-600">
                Valid suggestions and bug reports are prioritised in our development roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-centre">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardTitle className="mb-4">Urgent Issues</CardTitle>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For urgent safety concerns or critical platform issues, contact us directly.
                </p>
                <a
                  href="mailto:urgent@suburbmates.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  urgent@suburbmates.com
                </a>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-4">General Support</CardTitle>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For general questions or account support, visit our support centre.
                </p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Support Centre
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}