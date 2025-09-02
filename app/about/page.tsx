'use client';

import { motion } from 'framer-motion';
import { Award, Globe, Users, Shield, Target, Eye, Compass, TrendingUp, Building, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Us
            </h1>
            <div className="w-32 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Crafting Exceptional Travel Experiences Since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold uppercase tracking-wider mb-4">WELCOME TO SWISS HOSPITALITY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Gateway to <span className="text-gold">Luxury Travel</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Swiss Hospitality stands as a beacon of excellence in the luxury travel and hospitality industry. 
                  With over two decades of experience, we have redefined what it means to travel in style and comfort.
                </p>
                <p>
                  Our journey began with a simple vision: to transform ordinary trips into extraordinary experiences. 
                  Today, we are proud to be recognized as one of the leading luxury travel companies, serving discerning 
                  travelers who seek nothing but the best.
                </p>
                <p>
                  From the pristine beaches of the Maldives to the snow-capped peaks of the Swiss Alps, we curate 
                  journeys that capture the essence of each destination while providing unparalleled luxury and service.
                </p>
              </div>
              <div className="mt-8 flex gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-gold">25+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gold">50+</h3>
                  <p className="text-gray-600">Destinations</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gold">10K+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070" 
                    alt="Luxury Hotel"
                    className="rounded-lg shadow-xl w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070" 
                    alt="Resort"
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070" 
                    alt="Hotel Lobby"
                    className="rounded-lg shadow-xl w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070" 
                    alt="Pool"
                    className="rounded-lg shadow-xl w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission & Vision
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional travel experiences that exceed expectations, creating lasting memories 
                through personalized service, attention to detail, and a deep understanding of our clients&apos; desires. 
                We strive to be the bridge between dreams and reality in luxury travel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in luxury travel and hospitality, recognized for our innovation, 
                sustainability, and commitment to excellence. We envision a world where every journey with 
                Swiss Hospitality becomes a transformative experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="text-gold">Swiss Hospitality</span>
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that sets us apart in the world of luxury travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Award-Winning Service',
                description: 'Recognized globally for excellence in hospitality and customer satisfaction'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Dedicated professionals with extensive knowledge of luxury travel'
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Partnerships with premium properties and services worldwide'
              },
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'Your safety and peace of mind are our top priorities'
              },
              {
                icon: Compass,
                title: 'Curated Experiences',
                description: 'Handpicked destinations and activities for discerning travelers'
              },
              {
                icon: TrendingUp,
                title: 'Best Value',
                description: 'Competitive pricing without compromising on quality'
              },
              {
                icon: Building,
                title: 'Premium Properties',
                description: 'Access to exclusive hotels and resorts globally'
              },
              {
                icon: Handshake,
                title: 'Personal Touch',
                description: '24/7 support with a dedicated travel consultant'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                  <feature.icon className="h-10 w-10 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Journey
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of growth, innovation, and excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: '1998', title: 'The Beginning', desc: 'Started as a small travel agency with big dreams' },
              { year: '2005', title: 'Expansion', desc: 'Expanded operations to international destinations' },
              { year: '2010', title: 'Recognition', desc: 'Received first industry award for excellence' },
              { year: '2015', title: 'Digital Innovation', desc: 'Launched digital platform for seamless bookings' },
              { year: '2020', title: 'Global Presence', desc: 'Established partnerships in 50+ countries' },
              { year: '2024', title: 'Future Forward', desc: 'Continuing to redefine luxury travel experiences' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-2xl font-bold text-gold mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Experience <span className="text-gold">Excellence?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have discovered the Swiss Hospitality difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gold text-black font-semibold text-lg tracking-wider uppercase hover:bg-opacity-90 transition-all"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/membership">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all"
                >
                  View Membership
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}