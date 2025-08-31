'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Place } from '@/data/destinations';

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export default function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-3 left-3 text-white text-xl font-bold">{place.name}</h3>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 text-sm">{place.description}</p>
      </div>
    </motion.div>
  );
}