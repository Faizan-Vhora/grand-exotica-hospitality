'use client';

import { motion } from 'framer-motion';
import MembershipPlans from '@/components/sections/MembershipPlans';
import { Shield, Award, Globe, Users, Gift, Clock, Phone, Star } from 'lucide-react';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Exclusive <span className="text-gold">Membership</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the Swiss Hospitality family and enjoy unparalleled benefits, 
              exclusive access, and lifetime memories across the world's finest destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
      <MembershipPlans />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Member <span className="text-gold">Benefits</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience a world of privileges designed exclusively for our valued members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Guaranteed Reservations',
                description: 'Priority booking at all partner properties worldwide'
              },
              {
                icon: Award,
                title: 'Best Price Promise',
                description: 'Exclusive member rates lower than any public platform'
              },
              {
                icon: Gift,
                title: 'Complimentary Upgrades',
                description: 'Room upgrades subject to availability at check-in'
              },
              {
                icon: Clock,
                title: 'Flexible Check-in/out',
                description: 'Early check-in and late checkout privileges'
              },
              {
                icon: Users,
                title: 'Family Benefits',
                description: 'Extend benefits to immediate family members'
              },
              {
                icon: Globe,
                title: 'Global Concierge',
                description: '24/7 dedicated concierge service worldwide'
              },
              {
                icon: Star,
                title: 'VIP Treatment',
                description: 'Special welcome amenities and personalized service'
              },
              {
                icon: Phone,
                title: 'Priority Support',
                description: 'Dedicated member helpline for instant assistance'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gold transition-colors"
              >
                <benefit.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              How It <span className="text-gold">Works</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choose Plan', desc: 'Select a membership plan that suits your travel needs' },
              { step: '02', title: 'Register', desc: 'Complete the simple registration process online' },
              { step: '03', title: 'Get Card', desc: 'Receive your exclusive membership card' },
              { step: '04', title: 'Start Traveling', desc: 'Book and enjoy premium stays worldwide' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="text-5xl font-bold text-gold mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Join the <span className="text-gold">Elite Club?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey with Swiss Hospitality today and unlock a world of luxury travel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-black font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all"
            >
              Become a Member
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}