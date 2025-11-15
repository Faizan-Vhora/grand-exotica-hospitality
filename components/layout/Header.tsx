'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, CreditCard } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { 
    name: 'DESTINATIONS', 
    href: '#',
    dropdown: [
      { name: 'Domestic', href: '/domestic' },
      { name: 'International', href: '/international' }
    ]
  },
  { name: 'MEMBERSHIP PLANS', href: '/membership' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2' 
          : 'bg-black/80 backdrop-blur-sm py-3'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Swiss Hotels & Resorts */}
          <Link href="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/swiss-logo.png"
                alt="Swiss Hotels & Resorts"
                width={200}
                height={70}
                className="h-12 md:h-16 w-auto object-contain"
                priority
                style={{
                  filter: 'brightness(1.1)'
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-1 text-white/90 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-3 w-48 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-5 py-3 text-white/90 hover:text-gold hover:bg-gray-900/50 transition-colors duration-200 text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/90 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons Section with Social Icons */}
            <div className="flex flex-col items-center gap-2">
              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </motion.a>
                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-white/60 hover:text-gold transition-colors duration-200"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </motion.a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Make Payment Button */}
                <Link href="/payment">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gold text-black px-5 py-2 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="h-3.5 w-3.5" />
                    PAY NOW
                  </motion.button>
                </Link>

                {/* Member Login Button */}
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gold text-black px-6 py-2 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
                  >
                    MEMBER LOGIN
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="text-white/90 font-medium text-sm tracking-wider py-2">
                          {item.name}
                        </div>
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-white/70 hover:text-gold transition-colors duration-300 text-sm py-2"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/90 hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wider py-2 block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Action Buttons */}
                <Link href="/payment" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gold text-black px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    PAY NOW
                  </button>
                </Link>

                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gold text-black px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
                    MEMBER LOGIN
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}