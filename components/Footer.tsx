'use client';
import { motion } from 'framer-motion';

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Links</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                className="text-gray-600 hover:text-gray-900 w-fit"
                href=""
                variants={linkVariants}
                whileHover="hover"
              >
                Home
              </motion.a>
              <motion.a
                className="text-gray-600 hover:text-gray-900 w-fit"
                href="https://seqoria.ai/pricing"
                variants={linkVariants}
                whileHover="hover"
              >
                Pricing
              </motion.a>
              <motion.a
                className="text-gray-600 hover:text-gray-900 w-fit"
                href=""
                variants={linkVariants}
                whileHover="hover"
              >
                Try Genie
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-black">Legal</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                className="text-gray-600 hover:text-gray-900 w-fit"
                href=""
                variants={linkVariants}
                whileHover="hover"
              >
                Privacy
              </motion.a>
              <motion.a
                className="text-gray-600 hover:text-gray-900 w-fit"
                href=""
                variants={linkVariants}
                whileHover="hover"
              >
                Terms
              </motion.a>
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
