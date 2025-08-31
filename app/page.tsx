'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import LuxuryExperiences from '@/components/sections/LuxuryExperiences';
import InquiryForm from '@/components/sections/InquiryForm';
import DestinationCard from '@/components/cards/DestinationCard';
import { domesticDestinations, internationalDestinations } from '@/data/destinations';

export default function HomePage() {
  const featuredDomestic = domesticDestinations.slice(0, 2);
  const featuredInternational = internationalDestinations.slice(0, 2);

  return (
    <>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Domestic{' '}
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Destinations
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Explore the beauty of India</p>
              </div>
              <Link
                href="/domestic"
                className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
              >
                <span>View All</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredDomestic.map((destination, index) => (
                <DestinationCard key={destination.id} destination={destination} index={index} />
              ))}
            </div>

            <Link
              href="/domestic"
              className="md:hidden flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group mt-6"
            >
              <span>View More Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  International{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Destinations
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Discover the world beyond borders</p>
              </div>
              <Link
                href="/international"
                className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
              >
                <span>View All</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredInternational.map((destination, index) => (
                <DestinationCard key={destination.id} destination={destination} index={index} />
              ))}
            </div>

            <Link
              href="/international"
              className="md:hidden flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group mt-6"
            >
              <span>View More Destinations</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <LuxuryExperiences />
      <InquiryForm />
    </>
  );
}