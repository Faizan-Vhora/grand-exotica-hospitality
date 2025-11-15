import { Metadata } from 'next';
import PaymentForm from '@/components/forms/PaymentForm';
import { CreditCard, Shield, Lock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Make Payment | Swiss Hotels & Resorts',
  description: 'Secure online payment gateway for Swiss Hotels & Resorts travel packages and services.',
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 text-gold" />
              <span className="text-gold font-semibold">100% Secure Payment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Make a <span className="text-gold">Payment</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete your booking with our secure payment gateway. Fast, simple, and completely safe.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <Lock className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">SSL Encrypted</h3>
              <p className="text-gray-400 text-sm">256-bit encryption for maximum security</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <CreditCard className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Multiple Payment Options</h3>
              <p className="text-gray-400 text-sm">Cards, UPI, Net Banking & Wallets</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Instant Confirmation</h3>
              <p className="text-gray-400 text-sm">Immediate receipt & booking confirmation</p>
            </div>
          </div>

          {/* Payment Form Card */}
          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Payment Details</h2>
              <p className="text-gray-400">Please fill in your details to proceed with the payment</p>
            </div>

            <PaymentForm />
          </div>

          {/* Payment Methods */}
          <div className="mt-12 bg-gray-800/20 border border-gray-700 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4 text-center">Accepted Payment Methods</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="text-gray-400 text-sm">Credit Cards</div>
              <div className="text-gray-400 text-sm">Debit Cards</div>
              <div className="text-gray-400 text-sm">UPI</div>
              <div className="text-gray-400 text-sm">Net Banking</div>
              <div className="text-gray-400 text-sm">Wallets</div>
            </div>
          </div>

          {/* Support Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need help? Contact us at{' '}
              <a href="tel:+919998231516" className="text-gold hover:underline">
                +91 9998231516
              </a>
              {' '}or{' '}
              <a href="mailto:info@swisshospitality.co.in" className="text-gold hover:underline">
                info@swisshospitality.co.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
