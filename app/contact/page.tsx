'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

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
              
              <ContactForm />
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
            className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9636614974!2d72.53594437496837!3d23.023299179169914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84dca6f6beff%3A0x700dd99aa546653b!2sGopal%20Palace%2C%20Acharya%20Narendradev%20Nagar%2C%20Ambawadi%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1702901234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Office Location Map - Gopal Palace, B-510, Fifth Floor"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}