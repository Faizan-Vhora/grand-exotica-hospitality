'use client';

import { motion } from 'framer-motion';
import { Package, Clock, Star, Sparkles } from 'lucide-react';

const packages = [
  {
    id: 'honeymoon',
    title: 'Honeymoon Special',
    duration: '7 Days / 6 Nights',
    price: '₹45,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1543039625-14cbd3802e7d?w=800',
    features: ['Romantic Dinners', 'Couple Spa', 'Private Tours', 'Luxury Stay'],
    destinations: ['Maldives', 'Bali', 'Switzerland'],
  },
  {
    id: 'family',
    title: 'Family Adventure',
    duration: '5 Days / 4 Nights',
    price: '₹35,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    features: ['Kid-Friendly', 'Theme Parks', 'Beach Activities', 'Family Suites'],
    destinations: ['Singapore', 'Dubai', 'Thailand'],
  },
  {
    id: 'luxury',
    title: 'Luxury Escape',
    duration: '10 Days / 9 Nights',
    price: '₹1,50,000',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800',
    features: ['5-Star Hotels', 'Private Jets', 'Yacht Tours', 'Fine Dining'],
    destinations: ['Europe Tour', 'Dubai', 'Maldives'],
  },
  {
    id: 'adventure',
    title: 'Adventure Seekers',
    duration: '8 Days / 7 Nights',
    price: '₹55,000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800',
    features: ['Trekking', 'Water Sports', 'Safari', 'Camping'],
    destinations: ['Nepal', 'New Zealand', 'Kenya'],
  },
  {
    id: 'cultural',
    title: 'Cultural Heritage',
    duration: '6 Days / 5 Nights',
    price: '₹28,000',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    features: ['Heritage Sites', 'Local Cuisine', 'Cultural Shows', 'Guided Tours'],
    destinations: ['Rajasthan', 'Varanasi', 'South India'],
  },
  {
    id: 'budget',
    title: 'Budget Friendly',
    duration: '4 Days / 3 Nights',
    price: '₹12,000',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    features: ['Budget Hotels', 'Group Tours', 'Local Transport', 'Street Food'],
    destinations: ['Goa', 'Pondicherry', 'Ooty'],
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-24 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-orange-500 to-pink-600"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <Package className="h-16 w-16 mx-auto mb-4" />
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Tour Packages
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Curated travel experiences for every type of traveler
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                  {pkg.id === 'luxury' && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm font-semibold">Premium</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Destinations:</p>
                    <p className="text-sm font-medium">{pkg.destinations.join(' • ')}</p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}