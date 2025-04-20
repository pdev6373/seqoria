'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
      },
    },
  };

  return (
    <footer className="bg-white py-8 md:py-12 mt-auto border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Seqoria</h3>
            <p className="text-gray-600">
              Your personal AI assistant for everyday tasks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Links</h3>
            <div className="flex flex-col space-y-2 items-center">
              <motion.div
                className="w-fit"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </motion.div>
              <motion.div
                className="w-fit"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  href="https://seqoria.ai/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </motion.div>
              <motion.div
                className="w-fit"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  href="/genie"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Try Genie
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Legal</h3>
            <div className="flex flex-col space-y-2 items-center">
              <motion.div
                className="w-fit"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy
                </Link>
              </motion.div>
              <motion.div
                className="w-fit"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 md:mt-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © 2025 Seqoria. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
