'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact <span className="text-gold">Us</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re here to help you plan your perfect journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send Us a Message
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <select className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all">
                      <option value="">Select Service</option>
                      <option value="domestic">Domestic Tours</option>
                      <option value="international">International Tours</option>
                      <option value="packages">Holiday Packages</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none placeholder-gray-500"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@swisshospitality.com</p>
                    <p className="text-gray-400">support@swisshospitality.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-400">
                      B - 510, Gopal Palace, B - Wing<br />
                      Fifth Floor, Next to Shiromani Complex<br />
                      Beside Nehru Nagar Circle, Satellite Road<br />
                      Acharya Narendradev Nagar, Ambawadi<br />
                      Ahmedabad, Gujarat 380015<br />
                      Area: 1150 Sq. Ft. (106.84 Sq. Mtrs)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gray-900 p-3 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-gold" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gray-900 p-3 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-gold" />
                  </motion.a>
                  <motion.a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gray-900 p-3 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gray-900 p-3 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gold" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find Us Here
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="text-gray-400">Interactive map will be integrated here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}