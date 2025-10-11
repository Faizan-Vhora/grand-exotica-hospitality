'use client';

import { Shield, Calendar, Gift, Users, AlertCircle, ChevronRight } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-100">Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Membership Terms</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 leading-relaxed">
                A member can avail holidays by submitting a reservation request to <span className="font-semibold">Swiss Hospitality Management Pvt. Ltd.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Joint Applications</h3>
                    <p className="text-gray-600 text-sm">
                      In case of a joint application, requests for availing holidays will only be entertained from the principal member.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Booking Process</h3>
                    <p className="text-gray-600 text-sm">
                      All holiday reservations are processed on a first-come, first-served basis, subject to eligibility and availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-purple-600" />
                Booking Window
              </h3>
              <p className="text-gray-700 mb-4">
                The booking window will remain open <span className="font-bold text-purple-700">45 days in advance</span>, subject to availability.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                  <p className="text-gray-700">Members can split their holiday nights as per their preference.</p>
                </div>
                <div className="flex items-center">
                  <Gift className="h-4 w-4 text-green-600 mr-2" />
                  <p className="text-gray-700">Members may gift their holiday nights to another person <span className="font-semibold">once per year</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            By using our services, you agree to these terms and conditions.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Swiss Hospitality Management Pvt. Ltd. reserves the right to modify these terms at any time.
          </p>
        </div>
      </div>
    </div>
  );
}