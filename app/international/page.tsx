'use client';

import { motion } from 'framer-motion';
import DestinationCard from '@/components/cards/DestinationCard';
import { internationalDestinations } from '@/data/destinations';
import { Globe, Plane, Palmtree, Building } from 'lucide-react';

export default function InternationalPage() {
  return (
    <div className="pt-24 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            International Destinations
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Explore the world beyond borders - from exotic beaches to historic cities
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8" />
              <span className="text-sm mt-1">Continents</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="h-8 w-8" />
              <span className="text-sm mt-1">Adventures</span>
            </div>
            <div className="flex flex-col items-center">
              <Palmtree className="h-8 w-8" />
              <span className="text-sm mt-1">Beaches</span>
            </div>
            <div className="flex flex-col items-center">
              <Building className="h-8 w-8" />
              <span className="text-sm mt-1">Cities</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The World
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From tropical paradises to cultural capitals, experience the best destinations across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}