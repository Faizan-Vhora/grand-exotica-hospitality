'use client';

import { motion } from 'framer-motion';
import { 
  Plane, Hotel, Car, Shield, CreditCard, HeadphonesIcon,
  MapPin, Camera, Users, Calendar, Briefcase, Gift
} from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Best deals on domestic and international flights with all major airlines',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Handpicked accommodations from budget to luxury across the globe',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Car,
    title: 'Car Rentals',
    description: 'Self-drive and chauffeur-driven vehicles for comfortable travel',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for medical emergencies and trip cancellations',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'Visa Assistance',
    description: 'Complete visa processing support and documentation guidance',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Camera,
    title: 'Guided Tours',
    description: 'Expert local guides for immersive cultural experiences',
    color: 'from-yellow-500 to-orange-500',
  },
];

const additionalServices = [
  { icon: CreditCard, title: 'Easy EMI Options', description: 'Flexible payment plans' },
  { icon: HeadphonesIcon, title: '24/7 Support', description: 'Round-the-clock assistance' },
  { icon: Users, title: 'Group Discounts', description: 'Special rates for groups' },
  { icon: Calendar, title: 'Flexible Booking', description: 'Free cancellation options' },
  { icon: Briefcase, title: 'Corporate Travel', description: 'Business travel solutions' },
  { icon: Gift, title: 'Holiday Packages', description: 'All-inclusive deals' },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-700"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Complete travel solutions tailored to your needs
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Travel
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From planning to experiencing, we handle every detail of your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Additional Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Need Custom Travel Solutions?</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Our travel experts are ready to create personalized itineraries just for you
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}