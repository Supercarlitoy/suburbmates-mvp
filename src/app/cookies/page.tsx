export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-centre mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-centre justify-centre mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cookie h-8 w-8 text-blue-600">
              <path d="m15 2 2 2c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6 1.4-.6 2 0s.6 1.4 0 2L21 6c-.6.6-.6 1.5 0 2.1L23.1 10c.6.6.6 1.4 0 2s-1.4.6-2 0L19 10c-.6-.6-1.5-.6-2.1 0L15 12c-.6.6-1.4.6-2 0s-.6-1.4 0-2l2.1-2.1c.6-.6.6-1.5 0-2.1L13 4c-.6-.6-.6-1.4 0-2s1.4-.6 2 0Z"/>
              <circle cx="9" cy="9" r="1"/>
              <circle cx="15" cy="15" r="1"/>
              <circle cx="11" cy="15" r="1"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">Last updated: 28 August 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit websites. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Authentication and security</li>
                  <li>Shopping cart functionality</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular and see how visitors move around the site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Delete existing cookies</li>
              <li>Block new cookies</li>
              <li>Alert you when cookies are being sent</li>
              <li>Block third-party cookies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>SuburbMates Pty Ltd</strong></p>
              <p className="text-gray-700 mb-2">Email: privacy@suburbmates.com</p>
              <p className="text-gray-700 mb-2">Phone: 1300 SUBURB (1300 782 872)</p>
              <p className="text-gray-700">Address: Level 5, 123 Collins Street, Melbourne VIC 3000</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}