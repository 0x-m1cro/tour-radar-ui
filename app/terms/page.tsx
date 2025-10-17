import MainLayout from '@/layouts/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using TourRadar, you accept and agree to be bound by the terms and provisions 
            of this agreement. If you do not agree to these terms, please do not use our service.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use of Service</h2>
          <p className="text-gray-700 mb-6">
            TourRadar provides a platform for browsing and booking tours. You agree to use the service only 
            for lawful purposes and in accordance with these Terms of Service.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Bookings and Payments</h2>
          <p className="text-gray-700 mb-6">
            All bookings are subject to availability and confirmation. Payment terms will be provided at 
            the time of booking. Cancellation policies vary by tour operator.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Accounts</h2>
          <p className="text-gray-700 mb-6">
            You are responsible for maintaining the confidentiality of your account information and for all 
            activities that occur under your account.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            The content, organization, graphics, design, and other matters related to TourRadar are protected 
            under applicable copyrights and other proprietary laws.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            TourRadar acts as an intermediary between travelers and tour operators. We are not liable for 
            the acts, errors, omissions, representations, warranties, or negligence of tour operators.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. Continued use of the service after 
            changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms, please contact us at legal@tourradar.com
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
