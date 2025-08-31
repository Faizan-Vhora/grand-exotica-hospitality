'use client';

import { motion } from 'framer-motion';
import { Sparkles, Wine, Sunset, Anchor } from 'lucide-react';

const experiences = [
  {
    icon: Wine,
    title: 'Premium Dining',
    description: 'Savor exquisite cuisines at world-renowned restaurants',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sunset,
    title: 'Scenic Views',
    description: 'Wake up to breathtaking panoramas from luxury suites',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Anchor,
    title: 'Yacht Cruises',
    description: 'Sail through crystal waters on private yacht experiences',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Access',
    description: 'Enjoy VIP treatment at premier destinations worldwide',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function LuxuryExperiences() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury Travel{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in extraordinary moments that redefine luxury travel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform`}>
                  <exp.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="relative z-10 text-white text-center py-16 px-8">
            <Sparkles className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Ready for a Luxurious Escape?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us craft your perfect luxury travel experience with exclusive perks and personalized service
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Planning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}