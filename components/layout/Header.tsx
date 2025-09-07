'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImg from '../../public/swiss-logo.png';

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
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative"
            >
              {/* Subtle professional glow */}
              <div className="absolute -inset-4 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-xl" />
              
              {/* Logo with enhanced visibility */}
              <div className="relative">
                <Image
                  src={logoImg}
                  alt="Swiss Hospitality"
                  width={200}
                  height={65}
                  className="relative h-12 md:h-14 w-auto"
                  priority
                  style={{
                    filter: 'brightness(1.8) contrast(1.2) sepia(0.3) saturate(2) hue-rotate(15deg) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))',
                    mixBlendMode: 'screen',
                  }}
                />
                
                {/* Professional text enhancement */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src={logoImg}
                    alt="Swiss Hospitality"
                    width={200}
                    height={65}
                    className="h-12 md:h-14 w-auto opacity-30"
                    style={{
                      filter: 'blur(1px) brightness(2.5) sepia(0.5) saturate(3) hue-rotate(15deg)',
                    }}
                  />
                </div>
              </div>
              
              {/* Elegant bottom accent */}
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-gold/50 transition-colors duration-300" />
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

            {/* Member Login Section with Social Icons */}
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
              
              {/* Member Login Button */}
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gold text-black px-6 py-2 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300"
                >
                  MEMBER LOGIN
                </motion.button>
              </Link>
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
                
                {/* Mobile Member Login Button */}
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gold text-black px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300 mt-4">
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