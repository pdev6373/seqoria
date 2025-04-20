'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mt-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {`Hello, I'm Genie.`}
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your Personal Assistant
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {`I'm here to simplify your life. From managing your schedule to
            planning your travel, I've got you covered 24/7.`}
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Meet Your Assistant
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center order-first md:order-last py-8 md:py-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-36 md:w-48 h-36 md:h-48 bg-blue-200 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <motion.div
                className="w-24 md:w-32 h-24 md:h-32 bg-blue-300 rounded-full"
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
