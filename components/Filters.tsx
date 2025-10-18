'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  duration: string[];
  rating: number;
  difficulty: string[];
  category: string[];
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    duration: [],
    rating: 0,
    difficulty: [],
    category: [],
  });

  const durations = ['1-3 Days', '4-7 Days', '8-14 Days', '15+ Days'];
  const difficulties = ['Easy', 'Moderate', 'Challenging', 'Strenuous'];
  const categories = ['Adventure', 'Cultural', 'Wildlife', 'Beach & Island', 'Hiking & Trekking', 'Family'];

  const handleCheckboxChange = (type: keyof FilterState, value: string) => {
    const currentArray = filters[type] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    const newFilters = { ...filters, [type]: newArray };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (index: number, value: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange] as [number, number];
    newPriceRange[index] = value;
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [0, 10000],
      duration: [],
      rating: 0,
      difficulty: [],
      category: [],
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <span>Filters</span>
      </button>

      {/* Desktop Sidebar / Mobile Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '-100%' }}
        className={`fixed lg:relative lg:translate-x-0 inset-0 lg:inset-auto z-30 lg:z-auto bg-white lg:bg-transparent ${isOpen ? 'block' : 'hidden lg:block'}`}
      >
        <div className="h-full lg:h-auto overflow-y-auto p-4 lg:p-0">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div className="border-b pb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Max"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="border-b pb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Duration</h4>
              <div className="space-y-2">
                {durations.map((duration) => (
                  <label key={duration} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.duration.includes(duration)}
                      onChange={() => handleCheckboxChange('duration', duration)}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-gray-700">{duration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="border-b pb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Minimum Rating</h4>
              <div className="space-y-2">
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`flex items-center space-x-2 w-full text-left py-2 px-3 rounded-lg transition-colors ${
                      filters.rating === rating ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="ml-1 text-gray-900">{rating}+</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="border-b pb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Difficulty Level</h4>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <label key={difficulty} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.difficulty.includes(difficulty)}
                      onChange={() => handleCheckboxChange('difficulty', difficulty)}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-gray-700">{difficulty}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="pb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleCheckboxChange('category', category)}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay Background */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
        />
      )}
    </>
  );
}
