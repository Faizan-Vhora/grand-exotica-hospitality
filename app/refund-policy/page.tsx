'use client';

import { XCircle, AlertTriangle } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy / Cancellation</h1>
          <p className="text-xl text-red-100">Important Information About Payments</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
            <XCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Non-Refundable Policy</h2>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The vacation user/member understands and agrees that all payments made towards vacation charges,
                  membership fees, and associated gateway fees are <span className="font-bold text-red-700">strictly non-refundable
                  and non-cancellable</span> under any circumstances.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <p className="text-gray-700 text-lg">
              The said charges are <span className="font-bold">not a refundable deposit</span>, irrespective of whether
              the services are utilized or not.
            </p>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            By making a payment, you acknowledge and accept this refund policy in its entirety.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Swiss Hospitality Management Pvt. Ltd. - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}