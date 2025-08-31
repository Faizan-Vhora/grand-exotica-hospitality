'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  const baseUrl = destination.type === 'domestic' ? '/domestic' : '/international';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm capitalize">{destination.type}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        {destination.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {destination.highlights.slice(0, 3).map((highlight, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {destination.price && (
          <p className="text-lg font-semibold text-green-600 mb-4">{destination.price}</p>
        )}
        
        <Link
          href={`${baseUrl}/${destination.id}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group/link"
        >
          <span>Explore More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}