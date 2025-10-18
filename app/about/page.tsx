import MainLayout from '@/layouts/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TourRadar</h1>
          <p className="text-xl">Your trusted travel companion since 2010</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At TourRadar, we believe that travel has the power to transform lives and create lasting memories. 
              Our mission is to make discovering and booking unforgettable tours around the world simple, transparent, 
              and accessible to everyone.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-gray-700 mb-6">
              We connect travelers with the world&apos;s best tour operators, offering thousands of tours across 
              150+ destinations. From cultural explorations to adventure expeditions, we help you find the perfect 
              experience that matches your travel style and budget.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Best Price Guarantee</h3>
                <p className="text-gray-600">We guarantee the best prices on all tours or we&apos;ll match it plus 10% off.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated team is available around the clock to assist you.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Verified Reviews</h3>
                <p className="text-gray-600">All reviews are from verified travelers who&apos;ve booked through us.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, TourRadar started with a simple idea: make it easier for people to discover and 
              book multi-day tours. What began as a small team of passionate travelers has grown into the world&apos;s 
              leading platform for discovering and booking tours.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we work with thousands of trusted tour operators and have helped millions of travelers 
              create unforgettable memories around the globe.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
