'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactFormProps {
  className?: string;
  showServiceSelect?: boolean;
}

export default function ContactForm({ className = '', showServiceSelect = true }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms API - Sends emails to Soyebshaikh3786@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8036d9c4-a755-406c-ab86-7a6e1703cdc3',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || 'General Inquiry',
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
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className={`space-y-6 ${className}`} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.02 }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>
        
        {showServiceSelect && (
          <motion.div whileHover={{ scale: 1.02 }}>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
            >
              <option value="">Select Service</option>
              <option value="domestic">Domestic Tours</option>
              <option value="international">International Tours</option>
              <option value="packages">Holiday Packages</option>
              <option value="corporate">Corporate Travel</option>
              <option value="membership">Membership Plans</option>
              <option value="other">Other</option>
            </select>
          </motion.div>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.02 }}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message / Destination Preference"
          rows={6}
          required
          className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none placeholder-gray-500"
        />
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg"
        >
          ✓ Thank you for your inquiry! We&apos;ll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg"
        >
          ✗ Something went wrong. Please try again or contact us directly.
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-5 w-5" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
}