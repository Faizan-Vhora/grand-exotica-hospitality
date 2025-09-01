import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '+919662174670';
  const whatsappMessage = 'Hello, I am interested in your travel packages!';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/grand-exotica-hospitality' : ''}/Image.png`}
                alt="Swiss Hotels & Resorts"
                width={180}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
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
                <Link href="/domestic/kerala" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Kerala
                </Link>
              </li>
              <li>
                <Link href="/international/asia" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Thailand
                </Link>
              </li>
              <li>
                <Link href="/international/europe" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Switzerland
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 9662174670</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">faizanvhora0505@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Faizan Vhora. All rights reserved.
          </p>
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