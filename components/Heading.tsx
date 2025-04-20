'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Heading() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 ${scrolled ? 'shadow-md' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav
        className={`py-4 px-6 flex items-center justify-between bg-white transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <motion.a
          className="flex items-center space-x-2"
          href=""
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <span className="text-blue-600 font-bold text-2xl">S</span>
          <span className="font-semibold text-xl text-black">Seqoria</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <motion.a
            className="text-gray-600 hover:text-gray-900"
            href=""
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Home
          </motion.a>
          <motion.a
            className="text-gray-600 hover:text-gray-900"
            href="https://seqoria.ai/pricing"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Pricing
          </motion.a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            className="text-gray-600 hover:text-gray-900"
            href="https://seqoria.ai/login"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Log In
          </motion.a>
          <motion.a
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            href="https://seqoria.ai/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Sign Up
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute h-0.5 w-6 bg-black rounded-lg"
                animate={{
                  top: isOpen ? '10px' : '0px',
                  rotate: isOpen ? '45deg' : '0deg',
                }}
                transition={{ duration: 0.2 }}
              ></motion.span>
              <motion.span
                className="absolute h-0.5 w-6 bg-black rounded-lg top-2"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              ></motion.span>
              <motion.span
                className="absolute h-0.5 w-6 bg-black rounded-lg top-4"
                animate={{
                  top: isOpen ? '10px' : '16px',
                  rotate: isOpen ? '-45deg' : '0deg',
                }}
                transition={{ duration: 0.2 }}
              ></motion.span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden w-full bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4 space-y-4">
              <motion.a
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-100"
                href=""
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Home
              </motion.a>
              <motion.a
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-100"
                href="https://seqoria.ai/pricing"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Pricing
              </motion.a>
              <motion.a
                className="text-gray-600 hover:text-gray-900 py-2 border-b border-gray-100"
                href="https://seqoria.ai/login"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Log In
              </motion.a>
              <motion.a
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-center"
                href="https://seqoria.ai/signup"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Sign Up
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
