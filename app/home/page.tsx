'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import TourCard from '@/components/TourCard';
import { mockTours } from '@/lib/mockData';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  const featuredTours = mockTours.slice(0, 6);
  
  const destinations = [
    { name: 'Asia', image: '🏯', tours: 450 },
    { name: 'Europe', image: '🏰', tours: 380 },
    { name: 'Africa', image: '🦁', tours: 290 },
    { name: 'South America', image: '⛰️', tours: 220 },
    { name: 'North America', image: '🗽', tours: 195 },
    { name: 'Oceania', image: '🏝️', tours: 150 },
  ];

  const categories = [
    { name: 'Adventure Tours', icon: '🏔️', link: '/category/adventure-tours' },
    { name: 'Cultural Tours', icon: '🎭', link: '/category/cultural-tours' },
    { name: 'Wildlife Tours', icon: '🦒', link: '/category/wildlife-tours' },
    { name: 'Beach & Island', icon: '🏖️', link: '/category/beach-island' },
    { name: 'Hiking & Trekking', icon: '🥾', link: '/category/hiking-trekking' },
    { name: 'Family Tours', icon: '👨‍👩‍👧‍👦', link: '/category/family-tours' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Amazing experience! The tour was perfectly organized and our guide was incredibly knowledgeable. Would definitely book again!',
      tour: 'Machu Picchu Explorer',
    },
    {
      name: 'David Chen',
      location: 'Singapore',
      rating: 5,
      text: 'Best vacation of my life. Every detail was taken care of, and the group was fantastic. Highly recommend TourRadar!',
      tour: 'African Safari',
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 5,
      text: 'Professional, friendly, and unforgettable. The itinerary was perfect and exceeded all expectations.',
      tour: 'European Highlights',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
    console.log('Search:', searchQuery, selectedDestination);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10"
          >
            Explore the world with our curated selection of tours and experiences
          </motion.p>
          
          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSearch}
            className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-2xl"
          >
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none bg-gray-50"
            >
              <option value="">All Destinations</option>
              {destinations.map((dest) => (
                <option key={dest.name} value={dest.name.toLowerCase()}>
                  {dest.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Search Tours
            </button>
          </motion.form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 text-lg">Explore our most sought-after travel destinations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Link href={`/category/${dest.name.toLowerCase().replace(' ', '-')}`}>
                  <div className="text-5xl mb-3">{dest.image}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{dest.name}</h3>
                  <p className="text-sm text-gray-500">{dest.tours} tours</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tour Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Categories</h2>
            <p className="text-gray-600 text-lg">Find the perfect tour type for your travel style</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Link href={category.link}>
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
            <p className="text-gray-600 text-lg">Handpicked adventures for unforgettable experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TourCard {...tour} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/category/all"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.tour}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <p className="text-lg">Tours Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-lg">Destinations</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <p className="text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TourRadar?</h2>
            <p className="text-gray-600 text-lg">Your trusted travel companion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Find a lower price? We&apos;ll match it and give you 10% off</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">Our team is always here to help, before, during, and after your trip</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Reviews</h3>
              <p className="text-gray-600">All reviews are from verified travelers who&apos;ve booked through us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
