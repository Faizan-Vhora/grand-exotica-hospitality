'use client';

import { motion } from 'framer-motion';
import { Crown, Star, Award, Check, X, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Silver',
    price: '₹4,999',
    duration: 'per year',
    color: 'from-gray-400 to-gray-600',
    icon: Star,
    features: [
      { name: '5% discount on all bookings', included: true },
      { name: 'Priority customer support', included: true },
      { name: 'Free travel insurance (basic)', included: true },
      { name: 'Exclusive member newsletter', included: true },
      { name: 'Airport lounge access', included: false },
      { name: 'Personal travel consultant', included: false },
      { name: 'Free visa assistance', included: false },
      { name: 'Luxury hotel upgrades', included: false },
    ],
  },
  {
    name: 'Gold',
    price: '₹9,999',
    duration: 'per year',
    color: 'from-yellow-400 to-orange-500',
    icon: Crown,
    popular: true,
    features: [
      { name: '10% discount on all bookings', included: true },
      { name: 'Priority customer support', included: true },
      { name: 'Free travel insurance (premium)', included: true },
      { name: 'Exclusive member newsletter', included: true },
      { name: 'Airport lounge access (2 visits)', included: true },
      { name: 'Personal travel consultant', included: true },
      { name: 'Free visa assistance', included: false },
      { name: 'Luxury hotel upgrades', included: false },
    ],
  },
  {
    name: 'Platinum',
    price: '₹19,999',
    duration: 'per year',
    color: 'from-purple-500 to-pink-600',
    icon: Award,
    features: [
      { name: '15% discount on all bookings', included: true },
      { name: 'VIP customer support 24/7', included: true },
      { name: 'Free travel insurance (comprehensive)', included: true },
      { name: 'Exclusive member newsletter', included: true },
      { name: 'Unlimited airport lounge access', included: true },
      { name: 'Dedicated personal travel consultant', included: true },
      { name: 'Free visa assistance', included: true },
      { name: 'Complimentary luxury hotel upgrades', included: true },
    ],
  },
];

const benefits = [
  'Exclusive member-only deals',
  'Early access to new packages',
  'Birthday special discounts',
  'Referral rewards program',
  'Flexible booking changes',
  'Member-exclusive destinations',
];

export default function MembershipPage() {
  return (
    <div className="pt-24 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-purple-700 to-pink-600"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <Crown className="h-16 w-16" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Exclusive Membership
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Join our elite travel club and unlock premium benefits
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Membership Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600">Select the plan that suits your travel lifestyle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${plan.color} p-8 text-white text-center`}>
                  <plan.icon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <div className="text-sm opacity-90">{plan.duration}</div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? '' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Select Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Additional Member Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <Zap className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-purple-700 to-pink-600 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Elite Club?</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Start enjoying exclusive benefits and make every journey extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Join Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}