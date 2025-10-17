'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const destinations = [
    { name: 'Asia', href: '/category/asia' },
    { name: 'Europe', href: '/category/europe' },
    { name: 'Africa', href: '/category/africa' },
    { name: 'South America', href: '/category/south-america' },
    { name: 'North America', href: '/category/north-america' },
    { name: 'Oceania', href: '/category/oceania' },
  ];

  const tourTypes = [
    { name: 'Adventure Tours', href: '/category/adventure-tours' },
    { name: 'Cultural Tours', href: '/category/cultural-tours' },
    { name: 'Wildlife Tours', href: '/category/wildlife-tours' },
    { name: 'Hiking & Trekking', href: '/category/hiking-trekking' },
    { name: 'Family Tours', href: '/category/family-tours' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              TourRadar
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('destinations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-primary font-medium transition-colors">
                Destinations
              </button>
              <AnimatePresence>
                {activeDropdown === 'destinations' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2"
                  >
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        href={dest.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tour Types Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('tours')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-primary font-medium transition-colors">
                Tour Types
              </button>
              <AnimatePresence>
                {activeDropdown === 'tours' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2"
                  >
                    {tourTypes.map((tour) => (
                      <Link
                        key={tour.name}
                        href={tour.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                      >
                        {tour.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Destinations</div>
                  {destinations.map((dest) => (
                    <Link
                      key={dest.name}
                      href={dest.href}
                      className="block py-2 pl-4 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Tour Types</div>
                  {tourTypes.map((tour) => (
                    <Link
                      key={tour.name}
                      href={tour.href}
                      className="block py-2 pl-4 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tour.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <button className="text-gray-700 hover:text-primary font-medium text-left">
                    Sign In
                  </button>
                  <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
