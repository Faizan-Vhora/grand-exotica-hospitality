'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Globe, Plane, Building, Palmtree, Mountain, Camera, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

const internationalDestinations = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    description: 'City of Gold - Experience luxury shopping, ultramodern architecture, and vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    rating: 4.9,
    category: ['Luxury', 'Shopping', 'Modern'],
    activities: ['Shopping', 'Desert Safari', 'Skydiving', 'Yacht Tours']
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    description: 'Garden City - A perfect blend of culture, cuisine, arts and architecture',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070',
    rating: 4.8,
    category: ['Modern', 'Gardens', 'Culture'],
    activities: ['Theme Parks', 'Gardens', 'Shopping', 'Food Tours']
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    description: 'Tropical Paradise - Crystal clear waters, pristine beaches, and luxury resorts',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070',
    rating: 4.9,
    category: ['Beach', 'Luxury', 'Romance'],
    activities: ['Diving', 'Water Sports', 'Island Hopping', 'Spa']
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    description: 'Land of Smiles - Ancient temples, tropical beaches, and vibrant street life',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=2070',
    rating: 4.7,
    category: ['Beach', 'Culture', 'Adventure'],
    activities: ['Island Tours', 'Temple Visits', 'Thai Massage', 'Street Food']
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    description: 'Alpine Paradise - Snow-capped peaks, pristine lakes, and charming villages',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070',
    rating: 4.9,
    category: ['Mountains', 'Nature', 'Luxury'],
    activities: ['Skiing', 'Hiking', 'Scenic Trains', 'Chocolate Tours']
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Island of Gods - Stunning beaches, ancient temples, and lush rice terraces',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070',
    rating: 4.8,
    category: ['Beach', 'Culture', 'Nature'],
    activities: ['Surfing', 'Temple Tours', 'Yoga', 'Spa']
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'City of Love - Iconic landmarks, world-class art, and exquisite cuisine',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070',
    rating: 4.8,
    category: ['Culture', 'Romance', 'Art'],
    activities: ['Museums', 'Wine Tasting', 'River Cruise', 'Shopping']
  },
  {
    id: 'turkey',
    name: 'Turkey',
    country: 'Turkey',
    description: 'Where East Meets West - Rich history, stunning landscapes, and warm hospitality',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070',
    rating: 4.7,
    category: ['Culture', 'History', 'Adventure'],
    activities: ['Hot Air Balloon', 'Historical Tours', 'Turkish Bath', 'Bazaar Shopping']
  },
  {
    id: 'egypt',
    name: 'Egypt',
    country: 'Egypt',
    description: 'Land of Pharaohs - Ancient pyramids, mysterious tombs, and the mighty Nile',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2070',
    rating: 4.6,
    category: ['History', 'Culture', 'Adventure'],
    activities: ['Pyramid Tours', 'Nile Cruise', 'Desert Safari', 'Diving in Red Sea']
  }
];

const categories = [
  'All',
  'Beach',
  'Mountains',
  'Culture',
  'Luxury',
  'Romance',
  'Adventure',
  'History',
  'Modern',
  'Nature'
];

export default function InternationalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDestinations = internationalDestinations.filter(destination => {
    const matchesCategory = selectedCategory === 'All' || destination.category.includes(selectedCategory);
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-wider mb-4 text-sm">EXPLORE THE WORLD</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              International <span className="text-gold">Destinations</span>
            </h1>
            <div className="w-32 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Journey beyond borders to discover extraordinary places, cultures, and experiences
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-12">
              {[
                { icon: Globe, label: 'Countries', value: '15+' },
                { icon: Plane, label: 'Destinations', value: '50+' },
                { icon: Building, label: 'Cities', value: '30+' },
                { icon: Palmtree, label: 'Islands', value: '20+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="h-8 w-8 text-gold mb-2" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-300">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900 sticky top-20 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
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
              Discover <span className="text-gold">Amazing Places</span>
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From tropical paradises to cultural capitals, experience the world&apos;s most sought-after destinations
            </p>
          </motion.div>

          {filteredDestinations.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No destinations found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-500"
                >
                  <Link href={`/international/${destination.id}`}>
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                      
                      {/* Country Badge */}
                      <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-black font-semibold text-sm">{destination.country}</span>
                      </div>
                      
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{destination.description}</p>
                        
                        
                        {/* Activities - Show on Hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-wrap gap-2">
                            {destination.activities.slice(0, 3).map((activity, idx) => (
                              <span key={idx} className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popular Activities */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Popular <span className="text-gold">Experiences</span>
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Camera, label: 'Photography Tours' },
              { icon: Mountain, label: 'Mountain Trekking' },
              { icon: Palmtree, label: 'Beach Resorts' },
              { icon: Building, label: 'City Tours' },
              { icon: Heart, label: 'Honeymoon Packages' },
              { icon: Plane, label: 'Adventure Sports' },
              { icon: Globe, label: 'Cultural Immersion' },
              { icon: Sparkles, label: 'Luxury Escapes' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gold transition-all text-center group cursor-pointer"
              >
                <activity.icon className="h-12 w-12 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white font-medium">{activity.label}</p>
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
              Ready to Explore the <span className="text-gold">World?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us craft your perfect international getaway with exclusive deals and personalized itineraries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gold text-black font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all"
                >
                  Plan Your Journey
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all"
                >
                  View Packages
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}