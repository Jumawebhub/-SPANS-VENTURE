import { Link } from 'react-router-dom';
import { FaNetworkWired, FaShieldAlt, FaComments, FaServer, FaTools, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Intelligent Network',
    description: 'High-speed internet, structured cabling, fiber optics, and comprehensive network solutions.',
    icon: <FaNetworkWired className="text-4xl text-primary mb-4" />,
    link: '/solutions/intelligent-network'
  },
  {
    id: 2,
    title: 'Intelligent Security',
    description: 'Smart CCTV cameras, integrated alarm systems, and comprehensive security solutions.',
    icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
    link: '/solutions/intelligent-security'
  },
  {
    id: 3,
    title: 'Communication',
    description: 'PABX, IPBX, intercom systems, and advanced communication solutions for businesses.',
    icon: <FaComments className="text-4xl text-primary mb-4" />,
    link: '/solutions/communication'
  },
  {
    id: 4,
    title: 'ICT Infrastructure',
    description: 'Building backbone networks, LAN, building management systems, and power backup solutions.',
    icon: <FaServer className="text-4xl text-primary mb-4" />,
    link: '/solutions/ict-infrastructure'
  },
  {
    id: 5,
    title: 'Technical Support',
    description: '24/7 technical support, maintenance, and troubleshooting for all your technology needs.',
    icon: <FaTools className="text-4xl text-primary mb-4" />,
    link: '/services'
  },
  {
    id: 6,
    title: 'IT Consultancy',
    description: 'Expert IT consultancy services to help you make informed technology decisions.',
    icon: <FaChartLine className="text-4xl text-primary mb-4" />,
    link: '/services'
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive Technology Solutions</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            We offer a wide range of technology services designed to meet the unique needs of your business. Our expert team delivers innovative solutions that drive growth and efficiency.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;