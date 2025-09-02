'use client';

import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin } from 'lucide-react';

export default function InquiryForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Start Your <span className="text-gold">Journey</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-8" />
            <p className="text-xl text-gray-300">
              Get in touch with us to plan your dream vacation
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <select className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all appearance-none">
                  <option value="">Select Destination</option>
                  <option value="domestic">Domestic</option>
                  <option value="international">International</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6"
            >
              <textarea
                placeholder="Tell us about your dream vacation..."
                rows={4}
                className="w-full px-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none placeholder-gray-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-8 w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <Send className="h-5 w-5" />
              <span>Send Inquiry</span>
            </motion.button>
          </motion.form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-gold font-semibold mb-2">Call Us</h4>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400">info@swisshospitality.com</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}