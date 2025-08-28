import { Shield, AlertTriangle, CheckCircle, Phone, Eye, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Safety Tips - Stay Safe When Hiring Local Services | SuburbMates',
  description: 'Essential safety tips for hiring local professionals. Learn how to verify credentials, spot red flags, and protect yourself.',
};

export default function SafetyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-centre mb-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
          <Shield className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Safety
          <span className="text-blue-600 block">Comes First</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Essential tips and guidelines to help you hire local professionals safely and confidently. 
          Knowledge is your best protection.
        </p>
      </section>

      {/* Quick Safety Checklist */}
      <section className="mb-16">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-centre">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            Quick Safety Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Verify business ABN and licences</span>
              </div>              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Check insurance coverage</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Read recent customer reviews</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Get written quotes and agreements</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Meet in person before starting work</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Trust your instincts</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Keep records of all communications</span>
              </div>
              <div className="flex items-centre space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Report any issues to SuburbMates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Safety Guidelines */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-centre">Detailed Safety Guidelines</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Hiring */}
          <Card className="p-8">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-centre justify-centre mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Before Hiring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Verify Credentials</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check ABN on the Australian Business Register</li>
                    <li>• Verify trade licences where required</li>
                    <li>• Confirm insurance coverage for the work</li>
                    <li>• Look for professional association memberships</li>
                  </ul>
                </div>                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research the Business</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Read reviews from multiple sources</li>
                    <li>• Check how long they've been in business</li>
                    <li>• Look at their website and social media</li>
                    <li>• Ask for local references</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Get Multiple Quotes</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Compare at least 3 different quotes</li>
                    <li>• Be wary of quotes significantly higher or lower</li>
                    <li>• Ensure quotes include all costs and materials</li>
                    <li>• Ask about payment terms and schedules</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* During the Process */}
          <Card className="p-8">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-centre justify-centre mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>During the Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Get written contracts for all work</li>
                    <li>• Keep records of all communications</li>
                    <li>• Take photos before and after work</li>
                    <li>• Save all receipts and invoices</li>
                  </ul>
                </div>                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Safety</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Never pay large amounts upfront</li>
                    <li>• Use secure payment methods</li>
                    <li>• Pay in stages as work is completed</li>
                    <li>• Keep final payment until work is finished</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maintain regular communication</li>
                    <li>• Address concerns immediately</li>
                    <li>• Confirm any changes in writing</li>
                    <li>• Be present during key work phases</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Red Flags */}
      <section className="mb-16">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-centre">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
            Red Flags to Watch Out For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-red-600 mb-3">Suspicious Behaviour</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Door-to-door solicitation</li>
                <li>• High-pressure sales tactics</li>
                <li>• Demands for immediate payment</li>
                <li>• Refuses to provide written quotes</li>
                <li>• No fixed business address</li>
              </ul>
            </div>            
            <div>
              <h4 className="font-semibold text-red-600 mb-3">Pricing Red Flags</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quotes significantly below market rate</li>
                <li>• Demands full payment upfront</li>
                <li>• Cash-only payment requirements</li>
                <li>• Vague or incomplete quotes</li>
                <li>• Sudden price increases</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600 mb-3">Documentation Issues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• No ABN or business registration</li>
                <li>• Refuses to show insurance</li>
                <li>• No written contracts</li>
                <li>• Unlicensed for required work</li>
                <li>• Poor or no online presence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="mb-16">
        <Card className="p-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <div className="flex items-centre mb-4">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <CardTitle>Important Contacts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emergency Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Emergency:</strong> 000</li>
                  <li><strong>Police (non-emergency):</strong> 131 444</li>
                  <li><strong>Consumer Affairs Victoria:</strong> 1300 558 181</li>
                </ul>
              </div>              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Reporting & Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>ACCC Scamwatch:</strong> 1300 795 995</li>
                  <li><strong>Fair Trading:</strong> 13 32 20</li>
                  <li><strong>SuburbMates Support:</strong> support@suburbmates.com</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SuburbMates Protection */}
      <section className="mb-16">
        <div className="text-centre mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How SuburbMates Protects You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built multiple layers of protection to ensure your safety when using our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="mb-3">Business Verification</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                Every business is verified with valid ABN, insurance checks, and licence verification where applicable.
              </p>
            </CardContent>
          </Card>

          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="mb-3">Continuous Monitoring</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                We monitor reviews, complaints, and business performance to maintain quality standards.
              </p>
            </CardContent>
          </Card>          <Card className="text-centre p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-centre justify-centre mx-auto mb-4">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="mb-3">Support Team</CardTitle>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our support team is available to help resolve issues and investigate any concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-centre bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help or Have Concerns?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          If you encounter any issues or have safety concerns about a business on our platform, 
          please contact us immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-centre">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colours"
          >
            Contact Support
          </Link>
          <Link
            href="/feedback"
            className="rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colours"
          >
            Report an Issue
          </Link>
        </div>
      </section>
    </div>
  );
}