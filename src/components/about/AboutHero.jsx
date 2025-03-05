import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative bg-about-pattern bg-cover bg-center py-32">
      <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About SPANS VENTURE Limited
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a leading technology solutions provider with a passion for innovation and excellence. Learn more about our journey, values, and the team behind our success.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;