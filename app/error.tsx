'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-8"
        >
          <AlertTriangle className="h-20 w-20 text-gold" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Something Went Wrong
        </h1>

        <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />

        <p className="text-xl text-gray-300 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </motion.button>
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-sm text-gray-500">
            Error ID: {error.digest}
          </p>
        )}
      </motion.div>
    </div>
  );
}