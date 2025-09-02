'use client';

import { motion } from 'framer-motion';
import { Check, Star, Globe, Crown } from 'lucide-react';
import Link from 'next/link';

const membershipPlans = [
  {
    name: 'CLASSIC MEMBERSHIP',
    cardColor: 'bg-gradient-to-br from-blue-700 to-blue-900',
    price: '74999',
    duration: '3 years',
    nights: '6N/7D Yearly',
    coverage: 'India',
    accommodation: 'Only Accommodation',
    properties: 'Only 4 Star Properties',
  },
  {
    name: 'SIGNATURE MEMBERSHIP',
    cardColor: 'bg-gradient-to-br from-red-700 to-red-900',
    price: '149999',
    duration: '5 years',
    nights: '6N/7D Yearly',
    coverage: 'India + Asia',
    accommodation: 'Only Accommodation',
    properties: 'Only 4 Star Properties',
  },
  {
    name: 'PLATINUM MEMBERSHIP',
    cardColor: 'bg-gradient-to-br from-gray-800 to-black',
    price: '349999',
    duration: '10 years',
    nights: '8N/7D Yearly',
    coverage: 'India + Asia + Europe',
    accommodation: 'Only Accommodation',
    properties: 'Only 4/5 Star Properties',
  },
  {
    name: 'DIAMOND MEMBERSHIP',
    cardColor: 'bg-gradient-to-br from-purple-800 via-purple-900 to-black',
    price: '549999',
    duration: 'Lifetime',
    nights: '10N/9D Yearly',
    coverage: 'Worldwide',
    accommodation: 'All Inclusive',
    properties: 'Only 5 Star Properties',
  },
];

export default function MembershipPlans() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">EXCLUSIVE BENEFITS</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Membership <span className="text-gold">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our exclusive membership program and unlock premium benefits for unforgettable travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold text-center mb-4 text-gold">
                    {plan.name}
                  </h3>
                  
                  {/* Membership Card Visual */}
                  <div className={`${plan.cardColor} rounded-xl p-4 text-white shadow-xl relative overflow-hidden h-48`}>
                    <div className="absolute top-2 right-2">
                      <img 
                        src="/swiss-logo.png" 
                        alt="Swiss" 
                        className="h-8 w-auto opacity-80"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-2xl font-bold">I&apos;M</p>
                      <p className="text-2xl font-bold">MEMBER</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <p className="text-xs opacity-80">{plan.name.split(' ')[0]}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                      <Crown className="h-32 w-32" />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="px-6 pb-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">
                    ₹{plan.price}
                  </p>
                  <p className="text-gray-600">/ {plan.duration}</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{plan.nights}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{plan.coverage}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{plan.accommodation}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{plan.properties}</span>
                  </div>
                </div>

                {/* Subscribe Button */}
                <div className="px-6 pb-6">
                  <Link href="/membership">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-lg font-semibold uppercase tracking-wider"
                    >
                      Subscribe
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Star className="h-10 w-10 text-gold mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Premium Hotels</h4>
              <p className="text-gray-400 text-sm">Access to luxury properties worldwide</p>
            </div>
            <div className="text-center">
              <Globe className="h-10 w-10 text-gold mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Global Coverage</h4>
              <p className="text-gray-400 text-sm">Travel to destinations across the globe</p>
            </div>
            <div className="text-center">
              <Crown className="h-10 w-10 text-gold mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">VIP Treatment</h4>
              <p className="text-gray-400 text-sm">Exclusive perks and priority service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}