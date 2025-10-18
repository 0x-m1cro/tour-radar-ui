import MainLayout from '@/layouts/MainLayout';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We collect information that you provide directly to us, including name, email address, phone number, 
            and payment information when you create an account or make a booking.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use the information we collect to process your bookings, communicate with you about your tours, 
            improve our services, and send you marketing communications (with your consent).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
          <p className="text-gray-700 mb-6">
            We share your booking information with tour operators to facilitate your tours. We do not sell 
            your personal information to third parties.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies</h2>
          <p className="text-gray-700 mb-6">
            We use cookies and similar tracking technologies to track activity on our service and hold certain 
            information to improve your experience.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You have the right to access, update, or delete your personal information. You can also opt-out 
            of marketing communications at any time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Children&apos;s Privacy</h2>
          <p className="text-gray-700 mb-6">
            Our service is not intended for children under 13. We do not knowingly collect personal information 
            from children under 13.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, please contact us at privacy@tourradar.com
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
