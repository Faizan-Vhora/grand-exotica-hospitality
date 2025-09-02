'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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
          ? 'bg-black/95 backdrop-blur-md shadow-2xl py-4' 
          : 'bg-black/80 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-orange-500/20 to-pink-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-4 border border-gold/30 shadow-2xl group-hover:border-gold/50 transition-all duration-300">
                <Image
                  src={logoImg}
                  alt="Swiss Hospitality"
                  width={220}
                  height={70}
                  className="h-14 md:h-16 w-auto logo-enhance drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  priority
                />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl" />
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

            {/* Member Login Button */}
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black px-8 py-3 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300"
              >
                MEMBER LOGIN
              </motion.button>
            </Link>
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