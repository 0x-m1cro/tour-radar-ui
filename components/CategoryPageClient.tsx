'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import TourCard from '@/components/TourCard';
import Filters, { FilterState } from '@/components/Filters';
import { mockTours } from '@/lib/mockData';

export default function CategoryPageClient({ categoryName }: { categoryName: string }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    duration: [],
    rating: 0,
    difficulty: [],
    category: [],
  });

  // Filter tours based on current filters
  const filteredTours = useMemo(() => {
    let tours = [...mockTours];

    // Filter by price range
    tours = tours.filter(
      tour => tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1]
    );

    // Filter by rating
    if (filters.rating > 0) {
      tours = tours.filter(tour => tour.rating >= filters.rating);
    }

    // Filter by category
    if (filters.category.length > 0) {
      tours = tours.filter(tour => 
        filters.category.some(cat => tour.category.toLowerCase().includes(cat.toLowerCase()))
      );
    }

    // Filter by difficulty
    if (filters.difficulty.length > 0) {
      tours = tours.filter(tour => filters.difficulty.includes(tour.difficulty));
    }

    // Sort tours
    switch (sortBy) {
      case 'price-low':
        tours.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        tours.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        tours.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        tours.sort((a, b) => a.durationDays - b.durationDays);
        break;
      default:
        tours.sort((a, b) => b.reviews - a.reviews);
    }

    return tours;
  }, [filters, sortBy]);

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {categoryName} Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl"
          >
            Discover amazing {categoryName.toLowerCase()} experiences around the world
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <Filters onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-gray-700">
                  <span className="font-semibold">{filteredTours.length}</span> tours found
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort Dropdown */}
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="hidden md:flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tours Grid/List */}
            {filteredTours.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No tours found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                {filteredTours.map((tour, index) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TourCard {...tour} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredTours.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
