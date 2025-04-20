'use client';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Ready to Meet Your Personal Assistant?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands who are already enjoying a more organized, productive
            life with Seqoria.
          </p>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-lg hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
