import { Shield, Eye, Lock, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - How We Protect Your Data | SuburbMates',
  description: 'Our comprehensive privacy policy explaining how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-centre mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: 28 August 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              SuburbMates Pty Ltd ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") 
              is committed to protecting your privacy and personal information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-gray-700">
              This policy applies to all users of the SuburbMates platform, including homeowners seeking 
              services and businesses providing services. By using our platform, you consent to the 
              collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">We collect personal information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name, email address, and phone number</li>
              <li>Business details (for service providers)</li>
              <li>Profile information and photos</li>
              <li>Reviews and ratings</li>
              <li>Messages and communications</li>
              <li>Payment and billing information</li>
            </ul>            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Usage Information</h3>
            <p className="text-gray-700 mb-4">We automatically collect information about how you use our platform:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Device information and IP address</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our platform</li>
              <li>Search queries and preferences</li>
              <li>Location data (with your permission)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Third-Party Information</h3>
            <p className="text-gray-700">
              We may receive information about you from third parties, such as identity verification 
              services, payment processors, and publicly available business registers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Providing and maintaining our platform services</li>
              <li>Facilitating connections between homeowners and service providers</li>
              <li>Processing payments and managing accounts</li>
              <li>Verifying business credentials and maintaining platform safety</li>
              <li>Sending notifications and updates about our services</li>
              <li>Improving our platform and developing new features</li>
              <li>Complying with legal obligations and enforcing our terms</li>
              <li>Marketing and promotional communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 With Other Users</h3>
            <p className="text-gray-700 mb-4">
              Certain information is shared with other users to facilitate our services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Business profiles are visible to potential customers</li>
              <li>Reviews and ratings are publicly displayed</li>
              <li>Contact information may be shared upon service enquiry</li>
            </ul>            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We share information with trusted third-party service providers who help us operate 
              our platform, including payment processors, hosting providers, and analytics services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information if required by law, court order, or to protect our 
              rights, property, or safety, or that of our users or the public.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Business Transfers</h3>
            <p className="text-gray-700">
              In the event of a merger, acquisition, or sale of assets, your information may be 
              transferred as part of the business transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organisational measures to protect your personal 
              information against unauthorised access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Secure payment processing through certified providers</li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security of your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              Under Australian privacy law, you have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to certain uses of your information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            </ul>            <p className="text-gray-700">
              To exercise these rights, please contact us at privacy@suburbmates.com. We will respond 
              to your request within 30 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our platform. 
              These help us:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Analyse platform usage and performance</li>
              <li>Provide personalised content and recommendations</li>
              <li>Measure the effectiveness of our marketing</li>
            </ul>
            <p className="text-gray-700">
              You can control cookie settings through your browser preferences. For more information, 
              see our <a href="/cookies" className="text-blue-600 hover:text-blue-700">Cookie Policy</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to provide our services 
              and fulfil the purposes outlined in this policy. Generally, this means:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Account information: Until account deletion plus 7 years for legal compliance</li>
              <li>Transaction records: 7 years as required by Australian law</li>
              <li>Usage data: Up to 2 years for analytics purposes</li>
              <li>Marketing data: Until you opt out or as required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be stored and processed in countries outside Australia where our 
              service providers operate. We ensure appropriate safeguards are in place to protect 
              your information in accordance with Australian privacy laws.
            </p>
          </section>          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">
              Our platform is not intended for individuals under 18 years of age. We do not 
              knowingly collect personal information from children. If you become aware that 
              a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or applicable laws. We will notify you of material changes by posting 
              the updated policy on our platform and updating the "Last updated" date. Your 
              continued use of our platform after such changes constitutes acceptance of the 
              updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>SuburbMates Pty Ltd</strong></p>
              <p className="text-gray-700 mb-2">Email: privacy@suburbmates.com</p>
              <p className="text-gray-700 mb-2">Phone: 1300 SUBURB (1300 782 872)</p>
              <p className="text-gray-700 mb-2">Address: Level 5, 123 Collins Street, Melbourne VIC 3000</p>
              <p className="text-gray-700">ABN: 12 345 678 901</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Complaints</h2>
            <p className="text-gray-700">
              If you have concerns about how we handle your personal information, you may lodge 
              a complaint with us using the contact details above. If you are not satisfied with 
              our response, you may contact the Office of the Australian Information Commissioner 
              at <a href="https://www.oaic.gov.au" className="text-blue-600 hover:text-blue-700">www.oaic.gov.au</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}