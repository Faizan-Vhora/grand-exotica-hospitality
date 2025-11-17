'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, IndianRupee, Loader2 } from 'lucide-react';

interface PaymentFormProps {
  className?: string;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => Promise<void>;
  modal: {
    ondismiss: () => void;
  };
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): {
    open: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

export default function PaymentForm({ className = '' }: PaymentFormProps) {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus('idle');
    setStatusMessage('');

    try {
      // Validate amount
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        setPaymentStatus('error');
        setStatusMessage('Please enter a valid amount');
        setIsProcessing(false);
        return;
      }

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        setPaymentStatus('error');
        setStatusMessage('Failed to load payment gateway. Please try again.');
        setIsProcessing(false);
        return;
      }

      // Create order on backend
      const orderResponse = await fetch('/razorpay-create-order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parsedAmount,
          currency: 'INR',
          notes: {
            name,
            email,
            phone,
          },
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Razorpay payment options
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Swiss Hotels & Resorts',
        description: 'Travel Package Payment',
        order_id: orderData.orderId,
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: '#d4af37', // Gold color matching your theme
        },
        handler: async function (response: RazorpayResponse) {
          // Verify payment on backend
          try {
            const verifyResponse = await fetch('/razorpay-verify-payment.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              setPaymentStatus('success');
              setStatusMessage(`Payment successful! Transaction ID: ${response.razorpay_payment_id}`);

              // Reset form
              setAmount('');
              setName('');
              setEmail('');
              setPhone('');

              // Auto-hide success message after 10 seconds
              setTimeout(() => {
                setPaymentStatus('idle');
                setStatusMessage('');
              }, 10000);
            } else {
              setPaymentStatus('error');
              setStatusMessage('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            setPaymentStatus('error');
            setStatusMessage('Payment verification failed. Please contact support.');
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            setPaymentStatus('error');
            setStatusMessage('Payment cancelled');

            // Auto-hide error message after 5 seconds
            setTimeout(() => {
              setPaymentStatus('idle');
              setStatusMessage('');
            }, 5000);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <form className={`space-y-6 ${className}`} onSubmit={handlePayment}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            className="w-full px-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
            Payment Amount (₹) *
          </label>
          <div className="relative">
            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
              min="1"
              step="0.01"
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all placeholder-gray-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Status Messages */}
      {paymentStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg"
        >
          ✓ {statusMessage}
        </motion.div>
      )}

      {paymentStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg"
        >
          ✗ {statusMessage}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={isProcessing}
        className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5" />
            Proceed to Payment
          </>
        )}
      </motion.button>

      <p className="text-sm text-gray-400 text-center">
        Secured by Razorpay • Your payment information is encrypted and secure
      </p>
    </form>
  );
}
