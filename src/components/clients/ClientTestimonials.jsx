import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Valley View Office Park',
    position: '',
    company: 'Commercial',
    image: 'valley.png',
    quote: 'SPANS VENTURE Limited transformed our IT infrastructure completely. Their intelligent network solutions have significantly improved our operational efficiency and reduced downtime. The team was professional, knowledgeable, and responsive throughout the entire process.',
    rating: 5
  },
  {
    id: 2,
    name: 'capital Fm',
    position: '',
    company: 'Corporates institutions',
    image: 'capital.png',
    quote: 'The security systems implemented by SPANS VENTURE Limited have given us peace of mind. Their team\'s expertise and professionalism are unmatched in the industry. We\'ve seen a 40% reduction in security incidents since implementing their solutions.',
    rating: 5
  },
  {
    id: 3,
    name: 'Food Plus',
    position: '',
    company: 'Commercial',
    image: 'food.png',
    quote: 'We\'ve been working with SPANS VENTURE Limited for over 5 years now. Their consistent quality of service and innovative solutions keep us coming back for all our technology needs. Their healthcare-specific solutions have helped us improve patient care while maintaining strict compliance standards.',
    rating: 4
  },
  {
    id: 4,
    name: 'Faulu',
    position: '',
    company: 'Financial Banking',
    image: 'FAULU.png',
    quote: 'As an educational institution, we needed technology solutions that could support both our administrative needs and enhance the learning experience. SPANS VENTURE Limited delivered exactly what we needed, on time and within budget.',
    rating: 5
  }
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What Our Clients Say About Us</p>
          <p className="max-w-3xl mx-auto text-gray-500 mt-2">
            Don't just take our word for it. Here's what our clients have to say about their experience working with SPANS VENTURE Limited.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-4xl text-blue-500 opacity-20" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'} text-xl`} 
                    />
                  ))}
                </div>
              </div>
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
                  <p className="text-blue-500 font-medium">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
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
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
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

export default ClientTestimonials;
