'use client';
import { motion } from 'framer-motion';
import { Calendar, Plane, Heart } from 'lucide-react';

export default function Features() {
  const featuresVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 * i,
        duration: 0.5,
      },
    }),
  };

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: 'Productivity',
      description:
        "I'll manage your calendar, set reminders, organize your tasks, and help you stay on top of your busy schedule.",
      bgColor: 'bg-blue-100',
    },
    {
      icon: <Plane className="w-6 h-6 text-purple-600" />,
      title: 'Travel',
      description:
        "From booking flights to recommending hotels and creating itineraries, I'll make your travel planning effortless.",
      bgColor: 'bg-purple-100',
    },
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: 'Health',
      description:
        "I'll help you track fitness goals, remind you of appointments, and provide health insights tailored to your needs.",
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            How I Can Help You
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            {`I'm your all-in-one assistant, ready to handle all aspects of your
            personal and professional life.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              variants={featuresVariant}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
