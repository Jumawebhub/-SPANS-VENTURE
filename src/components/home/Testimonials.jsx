import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images properly
import juja from '../../../public/juja.png';
import nit from '../../../public/nit.jpg';
import cctv from '../../../public/cctv.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Juja City Mall',
    position: 'Commercial',
    image: juja,
    quote: 'SPANS VENTURE Limited transformed our IT infrastructure completely. Their intelligent network solutions have significantly improved our operational efficiency and reduced downtime.'
  },
  {
    id: 2,
    name: 'NIT',
    position: 'Education',
    image: nit,
    quote: 'The security systems implemented by SPANS VENTURE Limited have given us peace of mind. Their team\'s expertise and professionalism are unmatched in the industry.'
  },
  {
    id: 3,
    name: 'CCTV Africa',
    position: 'Corporate Institution',
    image: cctv,
    quote: 'We\'ve been working with SPANS VENTURE Limited for over 5 years now. Their consistent quality of service and innovative solutions keep us coming back for all our technology needs.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Testimonials from Satisfied Clients</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <FaQuoteLeft className="text-4xl text-primary opacity-20 mb-6" />
              <p className="text-lg text-gray-700 italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
