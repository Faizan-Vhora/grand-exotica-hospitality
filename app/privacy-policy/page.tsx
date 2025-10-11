'use client';

import { Shield, Lock, Database, Eye, UserCheck, Info, FileText, Server } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-green-100">Your Privacy is Our Priority</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
            <Shield className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Our Commitment to Your Privacy</h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Your privacy is important to us. This policy explains how we collect and use both personal information
              (that identifies you) and non-personal information about your interactions with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Database className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Information We Collect</h3>
                  <p className="text-gray-600 text-sm">
                    We collect personal and non-personal information to provide you with the best possible service
                    and travel experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Eye className="h-6 w-6 text-purple-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How We Use Information</h3>
                  <p className="text-gray-600 text-sm">
                    Your information helps us customize your travel experience and improve our services
                    for all members.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <Lock className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Data Security & Protection</h3>
                <p className="text-gray-700 mb-3">
                  We are committed to ensuring that your personal information is stored securely and protected at all times.
                </p>
                <p className="text-gray-700 font-semibold">
                  Swiss Hospitality Management Pvt. Ltd. assures that your interests and data privacy are safeguarded.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-lg">
              <Server className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Secure Storage</h4>
              <p className="text-xs text-gray-600">Advanced encryption protocols</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-lg">
              <UserCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">User Control</h4>
              <p className="text-xs text-gray-600">You control your data</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-lg">
              <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Transparency</h4>
              <p className="text-xs text-gray-600">Clear data practices</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-purple-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Acknowledgment</h3>
                <p className="text-gray-700">
                  By engaging with our services, you acknowledge and agree to the practices outlined in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            This privacy policy is effective as of {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            We may update this policy from time to time. Please review it periodically.
          </p>
        </div>
      </div>
    </div>
  );
}