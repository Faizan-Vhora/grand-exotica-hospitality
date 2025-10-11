import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImg from '../../public/swiss-logo.png';
import gujaratCertificate from '../../Gujarat Tourism Nidhi certificate.jpg';

export default function Footer() {
  const whatsappNumber = '+919998231516';
  const whatsappMessage = 'Hello, I am interested in your travel packages!';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <div className="mb-4">
              <Image
                src={logoImg}
                alt="Swiss Hotels & Resorts"
                width={180}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2.5 rounded-full hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2.5 rounded-full hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2.5 rounded-full hover:bg-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2.5 rounded-full hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2.5 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/domestic" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Domestic Tours
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-gray-300 hover:text-blue-400 transition-colors">
                  International Tours
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/domestic/kashmir" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Kashmir
                </Link>
              </li>
              <li>
                <Link href="/domestic/goa" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Goa
                </Link>
              </li>
              <li>
                <Link href="/international/asia" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="/international/europe" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Europe
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:flex lg:items-start lg:justify-between lg:col-span-1">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+91 9998231516</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">info@swisshospitality.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Mon-Sat: 10AM-6PM</span>
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src={gujaratCertificate}
                  alt="Gujarat Tourism Nidhi Certificate"
                  width={160}
                  height={120}
                  className="rounded-lg shadow-xl border border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faizanvhora0505@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Faizan Vhora</a>. All rights reserved. Ammar Ghanchi
            </p>
            <div className="flex space-x-6">
              <Link href="/terms-conditions" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </footer>
  );
}