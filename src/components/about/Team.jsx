import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">Meet the Expert Behind Our Success</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our leader is dedicated to delivering innovative technology solutions that help businesses thrive in the digital age.
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img 
            src="maina.jpeg" 
            alt="John Doe" 
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
         
          <p className="text-gray-500">CEO & Founder</p>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="mailto:johndoe@example.com" className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
