import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

// Correctly import images
import it from '../../../public/it.jpg';
import network from '../../../public/network.jpg';
import audit from '../../../public/audit.png';
import tech from '../../../public/tech.jpg';

const services = [
  {
    id: 1,
    title: 'Technical Support',
    description: 'Our 24/7 technical support team is always ready to assist you with any technology issues you may encounter. We provide prompt, efficient support to minimize downtime and keep your business running smoothly.',
    icon: <FaTools className="text-4xl text-primary mb-4" />,
    image: tech,
    features: [
      '24/7 helpdesk support',
      'Remote troubleshooting',
      'On-site technical assistance',
      'Preventive maintenance',
      'System updates and patches',
      'Performance optimization'
    ]
  },
  {
    id: 2,
    title: 'IT Consultancy',
    description: 'Our expert IT consultants work with you to understand your business needs and develop technology strategies that align with your goals.',
    image: it,
    features: [
      'Technology roadmap development',
      'Digital transformation strategy',
      'IT budget planning',
      'Vendor selection and management',
      'Technology risk assessment',
      'Cloud migration planning'
    ]
  },
  {
    id: 3,
    title: 'Network Services',
    description: 'We design, implement, and maintain robust network solutions that ensure reliable connectivity and optimal performance.',
    image: network,
    features: [
      'Network design and implementation',
      'Wireless network setup',
      'VPN configuration',
      'Network security',
      'Bandwidth optimization',
      'Network monitoring and maintenance'
    ]
  },
  {
    id: 4,
    title: 'System Audits',
    description: 'Our comprehensive system audits help identify vulnerabilities, performance issues, and areas for improvement in your IT infrastructure.',
    image: audit,
    features: [
      'Security vulnerability assessment',
      'Performance analysis',
      'Compliance audits',
      'Infrastructure evaluation',
      'Disaster recovery planning',
      'Documentation and reporting'
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive Technology Services</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            We offer a wide range of professional services designed to support your technology needs and help your business thrive in the digital age.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">
                    Request Service
                  </Link>
                </div>
                <div className="bg-gray-100 p-8 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
