'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const travelPartners = [
  {
    name: 'Expedia',
    url: 'https://www.expedia.com',
    logo: '/partners/t-expedia.jpg'
  },
  {
    name: 'ClearTrip',
    url: 'https://www.cleartrip.com',
    logo: '/partners/t-clear-trip.jpg'
  },
  {
    name: 'Booking.com',
    url: 'https://www.booking.com',
    logo: '/partners/t-booking.com_.jpg'
  },
  {
    name: 'MakeMyTrip',
    url: 'https://www.makemytrip.com',
    logo: '/partners/t-make-my-trip.jpg'
  },
  {
    name: 'Trivago',
    url: 'https://www.trivago.com',
    logo: '/partners/t-trivago.jpg'
  },
  {
    name: 'Travel Guru',
    url: 'https://www.travelguru.com',
    logo: '/partners/t-travel-guru.jpg'
  },
  {
    name: 'goIbibo',
    url: 'https://www.goibibo.com',
    logo: '/partners/t-goibibo.jpg'
  }
];

const airlinePartners = [
  {
    name: 'Vistara',
    url: 'https://www.airvistara.com',
    logo: '/partners/a-vistara.jpg'
  },
  {
    name: 'Air India',
    url: 'https://www.airindia.com',
    logo: '/partners/a-air-india.jpg'
  },
  {
    name: 'SpiceJet',
    url: 'https://www.spicejet.com',
    logo: '/partners/a-spicejet.jpg'
  },
  {
    name: 'IndiGo',
    url: 'https://www.goindigo.in',
    logo: '/partners/a-indigo.jpg'
  }
];

const preferredPartners = [
  {
    name: 'Marriott',
    url: 'https://www.marriott.com',
    logo: '/prefered partners/N-MARRIOTT.png'
  },
  {
    name: 'Fern Hotels',
    url: 'https://www.fernhotels.com',
    logo: '/prefered partners/N_FERN1.png'
  },
  {
    name: 'Hyatt',
    url: 'https://www.hyatt.com',
    logo: '/prefered partners/N_HAYATT.png'
  },
  {
    name: 'Hilton',
    url: 'https://www.hilton.com',
    logo: '/prefered partners/N_HILTON.png'
  },
  {
    name: 'Le Meridien',
    url: 'https://www.marriott.com/le-meridien',
    logo: '/prefered partners/N_LEMEREDIAN.png'
  },
  {
    name: 'Lemon Tree Hotels',
    url: 'https://www.lemontreehotels.com',
    logo: '/prefered partners/N_LEMONTRE.png'
  },
  {
    name: 'Lords Hotels',
    url: 'https://www.lordshotels.com',
    logo: '/prefered partners/N_LORDS.png'
  },
  {
    name: 'Radisson',
    url: 'https://www.radissonhotels.com',
    logo: '/prefered partners/N_RADISSIN.png'
  },
  {
    name: 'Ramada',
    url: 'https://www.wyndhamhotels.com/ramada',
    logo: '/prefered partners/N_RAMADA1.png'
  }
];

export default function PartnersSection() {
  const travelScrollRef = useRef<HTMLDivElement>(null);
  const airlineScrollRef = useRef<HTMLDivElement>(null);
  const preferredScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const travelScroll = travelScrollRef.current;
    const airlineScroll = airlineScrollRef.current;
    const preferredScroll = preferredScrollRef.current;

    if (!travelScroll || !airlineScroll || !preferredScroll) return;

    let travelPosition = 0;
    let airlinePosition = 0;
    let preferredPosition = 0;

    const scrollInterval = setInterval(() => {
      travelPosition += 0.3; // Even slower for smoother scrolling
      airlinePosition += 0.3; // Even slower for smoother scrolling
      preferredPosition += 0.3; // Even slower for smoother scrolling

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

      if (preferredScroll) {
        if (preferredPosition >= preferredScroll.scrollWidth / 2) {
          preferredPosition = 0;
        }
        preferredScroll.style.transform = `translateX(-${preferredPosition}px)`;
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
              className="flex gap-8 transition-transform ease-linear"
              style={{ width: 'max-content' }}
            >
              {[...travelPartners, ...travelPartners].map((partner, index) => (
                <motion.a
                  key={`travel-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="rounded-2xl transition-all duration-700 ease-in-out p-6 w-80 h-48 flex items-center justify-center border border-gray-800 group-hover:border-gold/50 bg-white group-hover:bg-gray-50 shadow-lg group-hover:shadow-xl"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-32 max-w-[240px] w-auto h-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-110 filter group-hover:brightness-110"
                    />
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
            Our Airline <span className="text-gold">Partners</span>
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="relative w-screen -mx-[50vw] left-[50%]">
          <div className="overflow-hidden">
            <div
              ref={airlineScrollRef}
              className="flex gap-8 transition-transform ease-linear"
              style={{ width: 'max-content' }}
            >
              {[...airlinePartners, ...airlinePartners].map((partner, index) => (
                <motion.a
                  key={`airline-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="rounded-2xl transition-all duration-700 ease-in-out p-6 w-80 h-48 flex items-center justify-center border border-gray-800 group-hover:border-gold/50 bg-white group-hover:bg-gray-50 shadow-lg group-hover:shadow-xl"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-32 max-w-[240px] w-auto h-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-110 filter group-hover:brightness-110"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preferred Partners */}
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
            Our Preferred <span className="text-gold">Partners</span>
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="relative w-screen -mx-[50vw] left-[50%]">
          <div className="overflow-hidden">
            <div
              ref={preferredScrollRef}
              className="flex gap-8 transition-transform ease-linear"
              style={{ width: 'max-content' }}
            >
              {[...preferredPartners, ...preferredPartners].map((partner, index) => (
                <motion.a
                  key={`preferred-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="rounded-2xl transition-all duration-700 ease-in-out p-6 w-80 h-48 flex items-center justify-center border border-gray-800 group-hover:border-gold/50 bg-white group-hover:bg-gray-50 shadow-lg group-hover:shadow-xl"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-32 max-w-[240px] w-auto h-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-110 filter group-hover:brightness-110"
                    />
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