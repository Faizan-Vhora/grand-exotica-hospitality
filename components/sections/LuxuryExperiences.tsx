'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const experiences = [
  {
    title: 'Suite Retreat',
    description: 'Experience pure indulgence in our elegantly designed suites, each offering breathtaking views and a sanctuary of relaxation.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
  },
  {
    title: 'Culinary Delights',
    description: 'Savor a culinary journey with our exquisite dining options curated by renowned chefs, promising an unforgettable gastronomic experience.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
  },
  {
    title: 'Personalized Service',
    description: 'Our dedicated team ensures every aspect of your stay is tailored to perfection, providing personalized service with warmth and efficiency.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
  },
  {
    title: 'Spa Oasis',
    description: 'Rejuvenate your senses at our tranquil spa, where ancient techniques and modern therapies harmonize to offer a blissful retreat.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070',
  },
  {
    title: 'Adventure Escapes',
    description: 'Embark on thrilling adventures amidst picturesque landscapes, with our curated excursions promising adrenaline-pumping experiences.',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070',
  },
  {
    title: 'Event Elegance',
    description: 'Host your special occasions in sophisticated style at our elegant venues, where every detail is meticulously tailored for a memorable event.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070',
  },
];

export default function LuxuryExperiences() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-4">LUXURIOUS EXPERIENCES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Indulge In Unmatched Luxury
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of bespoke services designed to elevate your stay to new heights of extravagance and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-6 group"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Decorative ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {exp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <Sparkles className="h-10 w-10 mx-auto mb-6 text-gold" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for a Luxurious Escape?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Let us craft your perfect luxury travel experience with exclusive perks and personalized service
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gold text-white font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all shadow-lg"
          >
            Start Planning
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}