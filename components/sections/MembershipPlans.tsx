'use client';

import { motion } from 'framer-motion';
import { Check, Star, Globe, Crown } from 'lucide-react';
import Link from 'next/link';

const membershipPlans = [
  {
    name: 'SILVER ESCAPE',
    cardColor: 'bg-gradient-to-br from-blue-700 to-blue-900',
    price: '6,99,999',
    duration: '25 years',
    nights: '7N/8D',
    accommodation: 'Only Stay',
    properties: '3*/4*',
    amc: 'AMC-10,499/-',
    coverage: 'For domestic only',
    blackout: '(Black out periods are not applicable)',
  },
  {
    name: 'GOLD EXPLORER',
    cardColor: 'bg-gradient-to-br from-red-700 to-red-900',
    price: '9,99,999',
    duration: '25 years',
    nights: '7N/8D',
    accommodation: 'Only Stay',
    properties: '3*/4*',
    amc: 'AMC-12,499/-',
    coverage: 'India + Asia',
    blackout: '(Black out periods are not applicable)',
  },
  {
    name: 'PLATINUM VOYAGER',
    cardColor: 'bg-gradient-to-br from-gray-800 to-black',
    price: '12,99,999',
    duration: '25 years',
    nights: '7N/8D',
    accommodation: 'Stay with breakfast',
    properties: '3*/4*/5*',
    amc: 'AMC-14,499/-',
    coverage: 'India + Asia',
    additionalInfo: 'India for all seasons',
    blackout: 'And Asia not applicable in black out periods.',
  },
  {
    name: 'DIAMOND ELITE',
    cardColor: 'bg-gradient-to-br from-purple-800 via-purple-900 to-black',
    price: '15,99,999',
    duration: '25 years',
    nights: '7N/8D',
    accommodation: 'Stay with breakfast',
    properties: '4*/5*',
    amc: 'AMC-16,499/-',
    coverage: 'World wide',
    additionalInfo: 'All season membership',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Card Header */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-center mb-4 text-gold uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  
                  {/* Membership Card Visual */}
                  <div className={`${plan.cardColor} rounded-xl p-4 text-white shadow-xl relative overflow-hidden h-40`}>
                    {/* Logo */}
                    <div className="absolute top-2 right-2 z-10">
                      <img 
                        src="/swiss-logo.png" 
                        alt="Swiss" 
                        className="h-8 w-auto opacity-80 filter brightness-200"
                      />
                    </div>
                    
                    {/* Main Text */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <p className="text-2xl font-bold">I&apos;M</p>
                      <p className="text-2xl font-bold">MEMBER</p>
                    </div>
                    
                    {/* Plan Type */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <p className="text-xs font-medium tracking-wider opacity-80">{plan.name.split(' ')[0]}</p>
                    </div>
                    
                    {/* Background Crown Pattern */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                      <Crown className="h-24 w-24" />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="px-5 pb-4 text-center border-b border-gray-200">
                  <p className="text-3xl font-bold text-gray-900">
                    ₹{plan.price}
                  </p>
                  <p className="text-gray-600 text-sm">/ {plan.duration}</p>
                </div>

                {/* Features */}
                <div className="px-5 py-4 space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{plan.nights}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{plan.accommodation}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{plan.properties}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-amber-700 text-sm font-semibold">{plan.amc}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{plan.coverage}</span>
                  </div>
                  {plan.additionalInfo && (
                    <div className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-gold flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{plan.additionalInfo}</span>
                    </div>
                  )}
                  {plan.blackout && (
                    <div className="text-xs text-gray-500 italic mt-3 p-2 bg-gray-50 rounded border-l-2 border-gold/30">
                      {plan.blackout}
                    </div>
                  )}
                </div>

                {/* Subscribe Button */}
                <div className="px-5 pb-5 mt-auto">
                  <Link href="/membership">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gold hover:bg-amber-600 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 text-sm"
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