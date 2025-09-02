'use client';

import { motion } from 'framer-motion';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          className="inline-block mb-8"
        >
          <Search className="h-20 w-20 text-gold" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />

        <p className="text-xl text-gray-300 mb-8">
          The page you&apos;re looking for seems to have taken an unexpected vacation. 
          Let us help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </motion.button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <Link href="/packages" className="text-gold hover:text-white transition-colors">
            View Packages
          </Link>
          <Link href="/services" className="text-gold hover:text-white transition-colors">
            Our Services
          </Link>
          <Link href="/international" className="text-gold hover:text-white transition-colors">
            Destinations
          </Link>
        </div>
      </motion.div>
    </div>
  );
}