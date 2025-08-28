import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - SuburbMates Platform Rules',
  description: 'Our terms of service governing the use of the SuburbMates platform for both homeowners and service providers.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-centre mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: 28 August 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to SuburbMates! These Terms of Service ("<strong>Terms</strong>") govern your 
              use of the SuburbMates platform and services provided by SuburbMates Pty Ltd ("<strong>we</strong>", 
              "<strong>us</strong>", or "<strong>our</strong>"). By accessing or using our platform, you agree 
              to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-700">
              If you do not agree to these Terms, please do not use our platform. We may update these 
              Terms from time to time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              SuburbMates is an online platform that connects homeowners with local service providers 
              including tradespeople, cleaners, gardeners, and other home service professionals. 
              We provide:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>A marketplace for discovering and connecting with service providers</li>
              <li>Tools for communication between users</li>
              <li>Review and rating systems</li>
              <li>Payment processing services</li>
              <li>Business verification and safety features</li>
            </ul>            <p className="text-gray-700">
              SuburbMates acts as an intermediary platform and is not directly involved in the 
              actual provision of services between users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 mb-4">
              To use certain features of our platform, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorised use</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old and legally able to enter into contracts to use our platform. 
              Service providers must hold appropriate licences and insurance where required by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Business Verification</h3>
            <p className="text-gray-700">
              Service providers must undergo our verification process, including providing valid ABN, 
              insurance certificates, and relevant trade licences where applicable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct and Responsibilities</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Use the platform for illegal or unauthorised purposes</li>
              <li>Provide false or misleading information</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to circumvent platform security measures</li>
              <li>Engage in fraudulent activities or scams</li>
            </ul>            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Service Provider Obligations</h3>
            <p className="text-gray-700 mb-4">Service providers must:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Maintain current licences and insurance</li>
              <li>Provide services in a professional manner</li>
              <li>Respond to enquiries promptly</li>
              <li>Complete agreed work to industry standards</li>
              <li>Comply with all applicable safety regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Customer Obligations</h3>
            <p className="text-gray-700 mb-4">Customers must:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate project descriptions</li>
              <li>Allow reasonable access for service provision</li>
              <li>Pay agreed amounts in accordance with terms</li>
              <li>Treat service providers with respect</li>
              <li>Provide honest and fair reviews</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments and Fees</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Platform Fees</h3>
            <p className="text-gray-700 mb-4">
              SuburbMates charges subscription fees for certain services as outlined in our pricing plans. 
              We may also charge transaction fees for payment processing services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Service Payments</h3>
            <p className="text-gray-700 mb-4">
              Payments for services are made directly between customers and service providers. 
              SuburbMates may facilitate these payments but is not responsible for payment disputes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Refunds</h3>
            <p className="text-gray-700">
              Platform subscription fees may be refunded in accordance with our refund policy. 
              Service payment refunds are subject to agreement between the parties involved.
            </p>
          </section>          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The SuburbMates platform, including its design, functionality, and content, is owned by 
              SuburbMates Pty Ltd and protected by intellectual property laws. You may not copy, 
              modify, or distribute our platform or content without permission.
            </p>
            <p className="text-gray-700">
              By using our platform, you grant us a licence to use any content you submit, including 
              reviews, photos, and business information, for the purpose of operating our platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700">
              Your privacy is important to us. Our collection and use of personal information is 
              governed by our <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>, 
              which forms part of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Platform Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              SuburbMates provides the platform "as is" without warranties of any kind. We do not 
              guarantee the quality, reliability, or availability of services provided by third parties 
              through our platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Service Provider Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              We are not responsible for the actions, conduct, or performance of service providers. 
              All contracts for services are between customers and service providers directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Limitation of Liability</h3>
            <p className="text-gray-700">
              To the maximum extent permitted by law, SuburbMates' liability is limited to the amount 
              paid by you for platform services in the 12 months preceding the incident giving rise to liability.
            </p>
          </section>          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Internal Resolution</h3>
            <p className="text-gray-700 mb-4">
              We encourage users to resolve disputes directly. Our platform provides tools to 
              facilitate communication and resolution between parties.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Mediation</h3>
            <p className="text-gray-700 mb-4">
              For disputes that cannot be resolved directly, we may provide mediation services 
              to help parties reach a mutually acceptable solution.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Governing Law</h3>
            <p className="text-gray-700">
              These Terms are governed by the laws of Victoria, Australia. Any legal proceedings 
              must be brought in the courts of Victoria.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us. We may suspend or 
              terminate your account for violation of these Terms or for any other reason at our discretion.
            </p>
            <p className="text-gray-700">
              Upon termination, your right to use the platform ceases immediately, but provisions 
              regarding liability, indemnification, and dispute resolution remain in effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless SuburbMates from any claims, damages, or 
              expenses arising from your use of the platform, violation of these Terms, or 
              infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700">
              We may modify these Terms at any time by posting updated terms on our platform. 
              Material changes will be notified to users with appropriate notice. Your continued 
              use after changes constitutes acceptance of the modified Terms.
            </p>
          </section>          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>SuburbMates Pty Ltd</strong></p>
              <p className="text-gray-700 mb-2">Email: legal@suburbmates.com</p>
              <p className="text-gray-700 mb-2">Phone: 1300 SUBURB (1300 782 872)</p>
              <p className="text-gray-700 mb-2">Address: Level 5, 123 Collins Street, Melbourne VIC 3000</p>
              <p className="text-gray-700">ABN: 12 345 678 901</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions will continue in full force and effect. The invalid provision will be 
              replaced with a valid provision that most closely reflects the original intent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}