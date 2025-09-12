'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, Star, 
  Filter, ChevronRight, Sparkles 
} from 'lucide-react';

// High-quality destination data with proper images
const destinations = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    tagline: 'Paradise on Earth',
    description: 'Experience the breathtaking beauty of snow-capped mountains, pristine lakes, and lush valleys',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070',
    rating: 4.8,
    category: 'Mountains',
    activities: ['Shikara Ride', 'Skiing', 'Trekking', 'Photography']
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Beach Paradise',
    description: 'Golden beaches, vibrant nightlife, Portuguese heritage, and tropical vibes await',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074',
    rating: 4.6,
    category: 'Beaches',
    activities: ['Water Sports', 'Beach Party', 'Scuba Diving', 'Parasailing']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Land of Kings',
    description: 'Majestic forts, royal palaces, colorful culture, and desert adventures',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
    rating: 4.9,
    category: 'Heritage',
    activities: ['Palace Tours', 'Desert Safari', 'Cultural Shows', 'Shopping']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'God\'s Own Country',
    description: 'Serene backwaters, lush tea gardens, exotic wildlife, and Ayurvedic wellness',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070',
    rating: 4.7,
    category: 'Nature',
    activities: ['Houseboat Stay', 'Tea Plantation', 'Wildlife Safari', 'Ayurveda']
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    tagline: 'Land of High Passes',
    description: 'Rugged landscapes, Buddhist monasteries, adventure sports, and pristine beauty',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    rating: 4.9,
    category: 'Adventure',
    activities: ['Biking', 'Trekking', 'Monastery Tours', 'Camping']
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    tagline: 'Tropical Paradise',
    description: 'Crystal clear waters, coral reefs, pristine beaches, and water adventures',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800',
    rating: 4.8,
    category: 'Islands',
    activities: ['Scuba Diving', 'Snorkeling', 'Beach Hopping', 'Kayaking']
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    tagline: 'Dev Bhoomi',
    description: 'Snow-clad peaks, adventure sports, hill stations, and scenic valleys',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww',
    rating: 4.7,
    category: 'Hills',
    activities: ['Trekking', 'Paragliding', 'River Rafting', 'Skiing']
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Spiritual Capital',
    description: 'Ancient ghats, spiritual experiences, rich culture, and timeless traditions',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070',
    rating: 4.6,
    category: 'Spiritual',
    activities: ['Ganga Aarti', 'Temple Tours', 'Boat Ride', 'Street Food']
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    tagline: 'Small Wonder',
    description: 'Pristine lakes, Buddhist monasteries, mountain views, and rhododendron valleys',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.8,
    category: 'Mountains',
    activities: ['Monastery Tours', 'Yak Ride', 'Cable Car', 'Local Markets']
  },
  {
    id: 'delhi',
    name: 'Delhi',
    tagline: 'Capital City',
    description: 'Historic monuments, vibrant markets, diverse cuisine, and cultural heritage',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070',
    rating: 4.5,
    category: 'Heritage',
    activities: ['Monument Tours', 'Street Food', 'Shopping', 'Museums']
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tagline: 'City of Dreams',
    description: 'Financial capital with Bollywood, beaches, colonial architecture, and nightlife',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2070',
    rating: 4.6,
    category: 'Urban',
    activities: ['City Tours', 'Beach Walk', 'Bollywood Tour', 'Street Food']
  },
  {
    id: 'pune',
    name: 'Pune',
    tagline: 'Oxford of the East',
    description: 'Educational hub with pleasant weather, historic sites, and IT industry',
    image: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=2070',
    rating: 4.4,
    category: 'Urban',
    activities: ['Fort Trekking', 'Museums', 'Food Tours', 'Shopping']
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'City of Pearls',
    description: 'Tech hub with historic sites, famous biryani, and modern attractions',
    image: 'https://images.unsplash.com/photo-1543158266-0066955047b1?w=800',
    rating: 4.5,
    category: 'Heritage',
    activities: ['Heritage Walk', 'Food Tour', 'Boating', 'Film City Tour']
  },
  {
    id: 'chennai',
    name: 'Chennai',
    tagline: 'Gateway to South India',
    description: 'Cultural capital with temples, beaches, classical arts, and cuisine',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
    rating: 4.4,
    category: 'Culture',
    activities: ['Beach Visit', 'Temple Tours', 'Classical Dance', 'Local Cuisine']
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    tagline: 'Silicon Valley of India',
    description: 'IT capital with gardens, breweries, pleasant climate, and vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2070',
    rating: 4.5,
    category: 'Urban',
    activities: ['Garden Tours', 'Brewery Tours', 'Shopping', 'Cafe Hopping']
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    tagline: 'City of Joy',
    description: 'Cultural capital with colonial heritage, literature, arts, and sweets',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070',
    rating: 4.5,
    category: 'Culture',
    activities: ['Heritage Walk', 'Tram Ride', 'Food Tour', 'Cultural Shows']
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'Pink City',
    description: 'Royal heritage with magnificent palaces, forts, bazaars, and jewellery',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070',
    rating: 4.7,
    category: 'Heritage',
    activities: ['Palace Tours', 'Elephant Ride', 'Shopping', 'Cultural Shows']
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    tagline: 'The Planned City',
    description: 'Modern architecture with gardens, lakes, and organized urban design',
    image: 'https://images.unsplash.com/photo-1716131985076-07350de31afd?w=800',
    rating: 4.3,
    category: 'Urban',
    activities: ['Garden Tours', 'Boating', 'Shopping', 'Museums']
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    tagline: 'City of Nawabs',
    description: 'Mughal heritage with refined culture, architecture, and famous cuisine',
    image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?w=800',
    rating: 4.5,
    category: 'Heritage',
    activities: ['Heritage Walk', 'Food Tour', 'Shopping', 'Cultural Shows']
  },
  {
    id: 'agra',
    name: 'Agra',
    tagline: 'City of Taj',
    description: 'Home to the symbol of love and magnificent Mughal architecture',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070',
    rating: 4.8,
    category: 'Heritage',
    activities: ['Monument Tours', 'Photography', 'Shopping', 'Food Tour']
  }
];

const categories = ['All', 'Mountains', 'Beaches', 'Heritage', 'Nature', 'Adventure', 'Islands', 'Hills', 'Spiritual', 'Urban', 'Culture'];

export default function DomesticPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/28762053/pexels-photo-28762053.jpeg?auto=compress&cs=tinysrgb&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] mb-4">EXPLORE THE INCREDIBLE</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Domestic <span className="text-gold">Destinations</span>
            </h1>
            <div className="w-32 h-[2px] bg-gold mx-auto mb-8" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the diverse beauty of India - from the Himalayas to the Indian Ocean
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 sticky top-20 z-30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-gold text-black' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-2 text-gray-400">
              <Filter className="h-5 w-5" />
              <span>{filteredDestinations.length} Destinations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-black">{destination.category}</span>
                    </div>
                    
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-1">{destination.name}</h3>
                      <p className="text-gold font-medium">{destination.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 line-clamp-2">{destination.description}</p>
                    
                    
                    
                    {/* CTA */}
                    <div className="flex items-center justify-end pt-4 border-t border-gray-800">
                      <Link href={`/domestic/${destination.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gold text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all"
                        >
                          View Details
                          <ChevronRight className="h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No destinations found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
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
            <Sparkles className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Can&apos;t Find Your <span className="text-gold">Dream Destination?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our travel experts for customized packages and exclusive deals
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}