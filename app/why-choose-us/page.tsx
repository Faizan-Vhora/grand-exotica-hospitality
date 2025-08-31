'use client';

import { motion } from 'framer-motion';
import { 
  Award, Users, Shield, ThumbsUp, Zap,
  Star, TrendingUp, Heart, Globe
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '15+ Years of Excellence',
    description: 'Trusted by thousands of travelers with proven track record of exceptional service',
    stat: '15+',
    statLabel: 'Years',
  },
  {
    icon: Users,
    title: '50,000+ Happy Travelers',
    description: 'Join our growing family of satisfied customers who travel with us repeatedly',
    stat: '50K+',
    statLabel: 'Travelers',
  },
  {
    icon: Globe,
    title: '100+ Destinations',
    description: 'Extensive network covering popular and offbeat destinations worldwide',
    stat: '100+',
    statLabel: 'Destinations',
  },
  {
    icon: Shield,
    title: 'Safe & Secure Travel',
    description: 'Comprehensive safety protocols and trusted partners for worry-free journeys',
    stat: '100%',
    statLabel: 'Safe',
  },
  {
    icon: ThumbsUp,
    title: 'Best Price Guarantee',
    description: 'Competitive pricing with no hidden charges and price match promise',
    stat: 'Best',
    statLabel: 'Prices',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Quick and easy booking process with instant confirmation',
    stat: '24/7',
    statLabel: 'Available',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Grand Exotica made our honeymoon absolutely perfect! Every detail was taken care of.',
    trip: 'Maldives Honeymoon',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Family trip to Singapore was amazing. Kids loved every moment. Great planning!',
    trip: 'Singapore Family Tour',
  },
  {
    name: 'Anita Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'Solo trip to Europe was seamless. Felt safe and supported throughout the journey.',
    trip: 'Europe Solo Travel',
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="pt-24 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-teal-600 to-blue-700"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Your trusted partner for creating unforgettable travel memories
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your travel experience is exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:bg-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-3 rounded-xl">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{reason.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-teal-600">{reason.stat}</div>
                        <div className="text-xs text-gray-500">{reason.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Travelers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real experiences from real travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-teal-600 mt-1">{testimonial.trip}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">98% Customer Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Join Our Travel Family</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Experience the difference of traveling with a partner who truly cares about your journey
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-teal-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}