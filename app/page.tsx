'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Globe, Users, Award, MapPin, Calendar, Shield, Sparkles, Building } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import LuxuryExperiences from '@/components/sections/LuxuryExperiences';
import MembershipPlans from '@/components/sections/MembershipPlans';
import InquiryForm from '@/components/sections/InquiryForm';
import DestinationCard from '@/components/cards/DestinationCard';
import { domesticDestinations, internationalDestinations } from '@/data/destinations';

export default function HomePage() {
  const featuredDomestic = domesticDestinations.slice(0, 3);
  const featuredInternational = internationalDestinations.slice(0, 3);

  return (
    <div className="bg-black min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome to <span className="text-gold">Swiss Hospitality</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With over two decades of excellence in luxury travel and hospitality, we craft bespoke journeys 
              that transcend ordinary vacations. Our commitment to perfection and attention to detail ensures 
              every moment of your journey is nothing short of extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Globe, title: '50+ Destinations', desc: 'Worldwide Coverage' },
              { icon: Users, title: '10,000+ Clients', desc: 'Satisfied Travelers' },
              { icon: Award, title: '25+ Years', desc: 'Industry Experience' },
              { icon: Star, title: '5 Star Service', desc: 'Premium Quality' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Premium Services
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Luxury Tours',
                desc: 'Curated travel experiences to the world\'s most exclusive destinations',
                image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1000'
              },
              {
                icon: Calendar,
                title: 'Event Planning',
                desc: 'Bespoke event management for weddings, corporate retreats, and celebrations',
                image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000'
              },
              {
                icon: Shield,
                title: 'Concierge Services',
                desc: '24/7 personalized assistance for all your travel and lifestyle needs',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div 
                  className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <service.icon className="h-10 w-10 text-gold mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-gold hover:text-white mt-4 transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Destinations */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Discover <span className="text-gold">India</span>
                </h2>
                <p className="text-xl text-gray-400">Explore the incredible diversity of our homeland</p>
              </div>
              <Link
                href="/domestic"
                className="hidden md:flex items-center space-x-2 text-gold hover:text-white font-medium group transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDomestic.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-500"
                >
                  <Link href={`/domestic/${destination.id}`}>
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-gray-300 mb-4">{destination.description.slice(0, 100)}...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gold font-semibold">{destination.price || 'Contact for pricing'}</span>
                          <span className="text-gray-400">{destination.highlights?.[0] || ''}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Destinations */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Explore the <span className="text-gold">World</span>
                </h2>
                <p className="text-xl text-gray-400">Journey beyond borders to extraordinary destinations</p>
              </div>
              <Link
                href="/international"
                className="hidden md:flex items-center space-x-2 text-gold hover:text-white font-medium group transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredInternational.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg bg-gray-900 hover:transform hover:scale-105 transition-all duration-500"
                >
                  <Link href={`/international/${destination.id}`}>
                    <div className="aspect-[4/5] relative">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-gray-300 mb-4">{destination.description.slice(0, 100)}...</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gold font-semibold">{destination.price || 'Contact for pricing'}</span>
                          <span className="text-gray-400">{destination.highlights?.[0] || ''}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <LuxuryExperiences />
      
      {/* Membership Plans Section */}
      <MembershipPlans />
      
      {/* Our Companies Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.3em] mb-4 text-sm">OUR ECOSYSTEM</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The <span className="text-gold">Swiss Hospitality</span> Group
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A premium hospitality ecosystem offering comprehensive luxury services through our specialized divisions
            </p>
          </motion.div>

          {/* Parent Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div 
                className="h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gold/10 backdrop-blur-sm border-2 border-gold rounded-lg p-8 max-w-2xl"
                    >
                      <h3 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        SWISS HOSPITALITY
                      </h3>
                      <div className="w-20 h-[2px] bg-gold mx-auto mb-4" />
                      <p className="text-lg text-gray-200 mb-2">Parent Company</p>
                      <p className="text-gray-300 max-w-xl mx-auto">
                        Leading the luxury hospitality industry with unparalleled excellence, innovation, and a commitment to creating unforgettable experiences worldwide
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Child Companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Swiss Stay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div 
                className="h-[450px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                        <Building className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Swiss Stay
                        </h3>
                        <p className="text-gold text-sm uppercase tracking-wider">Luxury Accommodation</p>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4">
                      Premium hotel and resort management offering world-class accommodation experiences across prime destinations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">5-Star Hotels</span>
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">Luxury Resorts</span>
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">Boutique Properties</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Swiss Event */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div 
                className="h-[450px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Swiss Event
                        </h3>
                        <p className="text-gold text-sm uppercase tracking-wider">Event Management</p>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-4">
                      Bespoke event planning and management for weddings, corporate events, and exclusive celebrations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">Luxury Weddings</span>
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">Corporate Events</span>
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm">Gala Dinners</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-gold to-yellow-600 rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-4xl font-bold text-black">100+</h4>
                <p className="text-black/80 font-medium">Luxury Properties</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black">500+</h4>
                <p className="text-black/80 font-medium">Events Organized</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black">25+</h4>
                <p className="text-black/80 font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black">50K+</h4>
                <p className="text-black/80 font-medium">Happy Guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us - Moved to end of page */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="text-gold">Swiss Hospitality</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Personalized Service',
                desc: 'Every journey is tailored to your unique preferences and desires'
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Your security and well-being are our top priorities'
              },
              {
                icon: Award,
                title: 'Award Winning',
                desc: 'Recognized globally for excellence in luxury travel'
              },
              {
                icon: Users,
                title: 'Expert Guides',
                desc: 'Local experts who bring destinations to life'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gold transition-colors"
              >
                <feature.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <InquiryForm />
    </div>
  );
}