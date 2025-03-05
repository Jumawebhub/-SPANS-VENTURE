import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const values = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-primary mb-4" />,
    title: 'Customer Focus',
    description: 'We put our clients at the center of everything we do, striving to exceed expectations and deliver exceptional value.'
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-4xl text-primary mb-4" />,
    title: 'Innovation',
    description: 'We embrace innovation and continuously seek new ways to improve our solutions and services.'
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-primary mb-4" />,
    title: 'Integrity',
    description: 'We conduct our business with the highest level of integrity, transparency, and ethical standards.'
  },
  {
    id: 4,
    icon: <FaRocket className="text-4xl text-primary mb-4" />,
    title: 'Excellence',
    description: 'We are committed to excellence in everything we do, from the solutions we provide to the service we deliver.'
  }
];

const WhoWeAre = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">Our Values and Principles</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            At SPANS VENTURE Limited, we are guided by a set of core values that define who we are and how we operate. These values shape our culture, drive our decisions, and help us deliver exceptional service to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <motion.div 
              key={value.id} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: value.id * 0.1 }}
              viewport={{ once: true }}
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
              Spans Ventures Ltd will emerge as a Pan –Africa ICT and security Smart solution provider.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
              To be a successful ICT & Telecom Systems and security systems Integrator in the region delivering the best customer experience, meeting and exceeding customers’ expectations and delivering profitability to our shareholders
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;