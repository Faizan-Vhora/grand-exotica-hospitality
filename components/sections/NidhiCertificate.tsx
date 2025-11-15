'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle } from 'lucide-react';
import gujaratCertificate from '../../Gujarat Tourism Nidhi certificate.jpg';

export default function NidhiCertificate() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-6">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Government Certified</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              NIDHI <span className="text-gold">Certified</span> Agency
            </h2>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          </div>

          {/* Certificate Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          >
            {/* Certificate Image */}
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-lg" />
                <div className="relative border-4 border-gold rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
                  <Image
                    src={gujaratCertificate}
                    alt="Gujarat Tourism NIDHI Certificate"
                    width={350}
                    height={262}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Certificate Description */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-green-500 font-semibold text-lg">Officially Affiliated</span>
              </div>

              <div className="bg-black/30 border border-gold/20 rounded-xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                  We are pleased to inform you that we are now <span className="text-gold font-semibold">Affiliated with NIDHI</span>
                  {' '}(<span className="text-white font-medium">National Integrated Database of Hospitality Industry</span>),
                  which is a <span className="text-gold font-semibold">Ministry of Tourism</span> initiative managed by the{' '}
                  <span className="text-gold font-semibold">Government of India</span>.
                </p>

                <div className="w-16 h-[1px] bg-gold/50 mx-auto my-6" />

                <p className="text-base md:text-lg text-gray-300">
                  This certification can be used in <span className="text-white font-medium">all states across India</span>,
                  allowing us to officially promote and use this{' '}
                  <span className="text-gold font-semibold">Government-approved NIDHI Certificate</span>.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">Ministry of Tourism</p>
                  <p className="text-xs text-gray-500">Government of India</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">NIDHI Certified</p>
                  <p className="text-xs text-gray-500">National Database</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <Award className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm text-gray-300 font-medium">All India Valid</p>
                  <p className="text-xs text-gray-500">Pan-India Coverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
