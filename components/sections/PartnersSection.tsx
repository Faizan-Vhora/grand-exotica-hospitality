'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const travelPartners = [
  {
    name: 'Expedia',
    url: 'https://www.expedia.com',
    color: '#003B95',
    bgColor: '#E8F2FF'
  },
  {
    name: 'EaseMyTrip',
    url: 'https://www.easemytrip.com',
    color: '#0066CC',
    bgColor: '#E6F3FF'
  },
  {
    name: 'Cleartrip',
    url: 'https://www.cleartrip.com',
    color: '#FF6B35',
    bgColor: '#FFF5F0'
  },
  {
    name: 'Booking.com',
    url: 'https://www.booking.com',
    color: '#003580',
    bgColor: '#EAF0F9'
  },
  {
    name: 'Trivago',
    url: 'https://www.trivago.com',
    color: '#007FAD',
    bgColor: '#E5F5FA'
  },
  {
    name: 'MakeMyTrip',
    url: 'https://www.makemytrip.com',
    color: '#EF5350',
    bgColor: '#FFEBEE'
  },
  {
    name: 'Agoda',
    url: 'https://www.agoda.com',
    color: '#5A5FD8',
    bgColor: '#F0F1FF'
  },
  {
    name: 'Hotels.com',
    url: 'https://www.hotels.com',
    color: '#D32F2F',
    bgColor: '#FFEBEE'
  }
];

const airlinePartners = [
  {
    name: 'Vistara',
    url: 'https://www.airvistara.com',
    color: '#4B2C5E',
    bgColor: '#F5F0F7'
  },
  {
    name: 'Air India',
    url: 'https://www.airindia.com',
    color: '#ED1B24',
    bgColor: '#FFF0F1'
  },
  {
    name: 'SpiceJet',
    url: 'https://www.spicejet.com',
    color: '#FFA500',
    bgColor: '#FFF8E8'
  },
  {
    name: 'IndiGo',
    url: 'https://www.goindigo.in',
    color: '#0F1E6C',
    bgColor: '#E8EAF6'
  },
  {
    name: 'Emirates',
    url: 'https://www.emirates.com',
    color: '#D71921',
    bgColor: '#FFEBEC'
  },
  {
    name: 'Qatar Airways',
    url: 'https://www.qatarairways.com',
    color: '#5C0632',
    bgColor: '#F8E8F0'
  },
  {
    name: 'Singapore Airlines',
    url: 'https://www.singaporeair.com',
    color: '#002157',
    bgColor: '#E8EDF5'
  },
  {
    name: 'Lufthansa',
    url: 'https://www.lufthansa.com',
    color: '#05164D',
    bgColor: '#E6E9F2'
  }
];

export default function PartnersSection() {
  const travelScrollRef = useRef<HTMLDivElement>(null);
  const airlineScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const travelScroll = travelScrollRef.current;
    const airlineScroll = airlineScrollRef.current;
    
    if (!travelScroll || !airlineScroll) return;

    let travelPosition = 0;
    let airlinePosition = 0;
    
    const scrollInterval = setInterval(() => {
      travelPosition += 0.5; // Slower speed
      airlinePosition += 0.5; // Slower speed
      
      if (travelScroll) {
        if (travelPosition >= travelScroll.scrollWidth / 2) {
          travelPosition = 0;
        }
        travelScroll.style.transform = `translateX(-${travelPosition}px)`;
      }
      
      if (airlineScroll) {
        if (airlinePosition >= airlineScroll.scrollWidth / 2) {
          airlinePosition = 0;
        }
        airlineScroll.style.transform = `translateX(-${airlinePosition}px)`;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      {/* Travel Partners */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="text-center mb-16 px-4">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Partners
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Travel <span className="text-gold">Partners</span>
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="relative w-screen -mx-[50vw] left-[50%]">
          <div className="overflow-hidden">
            <div 
              ref={travelScrollRef}
              className="flex gap-6 transition-transform ease-linear"
              style={{ width: 'max-content' }}
            >
              {[...travelPartners, ...travelPartners].map((partner, index) => (
                <motion.a
                  key={`travel-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="rounded-2xl transition-all duration-500 p-10 w-64 h-40 flex items-center justify-center border border-gray-800 group-hover:border-gold/50 bg-gray-900/50 backdrop-blur-sm group-hover:bg-gray-900/70"
                  >
                    <span 
                      className="text-3xl font-extrabold transition-all duration-300 group-hover:scale-110"
                      style={{ color: partner.color }}
                    >
                      {partner.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Airline Partners */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16 px-4">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Partners
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Airline <span className="text-gold">Partners</span>
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="relative w-screen -mx-[50vw] left-[50%]">
          <div className="overflow-hidden">
            <div 
              ref={airlineScrollRef}
              className="flex gap-6 transition-transform ease-linear"
              style={{ width: 'max-content' }}
            >
              {[...airlinePartners, ...airlinePartners].map((partner, index) => (
                <motion.a
                  key={`airline-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="rounded-2xl transition-all duration-500 p-10 w-64 h-40 flex items-center justify-center border border-gray-800 group-hover:border-gold/50 bg-gray-900/50 backdrop-blur-sm group-hover:bg-gray-900/70"
                  >
                    <span 
                      className="text-3xl font-extrabold transition-all duration-300 group-hover:scale-110"
                      style={{ color: partner.color }}
                    >
                      {partner.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}