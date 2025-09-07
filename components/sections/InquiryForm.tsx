'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms API - No password needed, unlimited submissions!
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // This access key sends emails to Soyebshaikh3786@gmail.com
          access_key: '8036d9c4-a755-406c-ab86-7a6e1703cdc3',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          message: formData.message,
          subject: `New Travel Inquiry from ${formData.name}`,
          from_name: 'Swiss Hotels & Resorts Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
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
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all placeholder-gray-500"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                <select 
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all appearance-none">
                  <option value="">Select Destination</option>
                  <option value="Domestic">Domestic</option>
                  <option value="International">International</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream vacation..."
                rows={4}
                className="w-full px-4 py-4 bg-black border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-none placeholder-gray-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg tracking-wider uppercase flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
            </motion.button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 text-center">Inquiry sent successfully! We&apos;ll contact you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 text-center">Failed to send inquiry. Please try again.</p>
            )}
          </motion.form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-gold font-semibold mb-2">Call Us</h4>
              <p className="text-gray-400">+91 74051 08104</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400">info@swisshospitality.co.in</p>
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