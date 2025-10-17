'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface TourCardProps {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  operator: string;
  category: string;
}

export default function TourCard({
  id,
  title,
  destination,
  duration,
  price,
  rating,
  reviews,
  operator,
  category,
}: TourCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link href={`/tour/${id}`}>
        <div className="relative h-48 bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-white text-sm font-medium">{destination}</span>
          </div>
          <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary">
            {category}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="ml-1 text-sm font-semibold text-gray-900">{rating}</span>
              <span className="ml-1 text-sm text-gray-500">({reviews})</span>
            </div>
            <span className="text-xs text-gray-500">{duration}</span>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="text-xs text-gray-500 mb-3">
            by {operator}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500">From</span>
              <div className="text-xl font-bold text-primary">
                ${price.toLocaleString()}
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
