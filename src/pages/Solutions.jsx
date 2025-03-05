import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaShieldAlt, FaComments, FaServer } from 'react-icons/fa';
import SolutionHero from '../components/solutions/SolutionHero';
import CallToAction from '../components/home/CallToAction';

const solutions = [
  {
    id: 1,
    title: 'Intelligent Network',
    description: 'High-speed internet, structured cabling, fiber optics, and comprehensive network solutions for businesses of all sizes.',
    icon: <FaNetworkWired className="text-5xl text-primary mb-6" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/intelligent-network',
    features: [
      'High-speed internet connectivity',
      'Structured cabling solutions',
      'Fiber optic installations',
      'IP telephone systems',
      'LAN and WAN setup',
      'Network monitoring and maintenance'
    ]
  },
  {
    id: 2,
    title: 'Intelligent Security',
    description: 'Smart CCTV cameras, integrated alarm systems, and comprehensive security solutions to protect your business assets.',
    icon: <FaShieldAlt className="text-5xl text-primary mb-6" />,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/intelligent-security',
    features: [
      'Smart CCTV camera systems',
      'Integrated alarm systems',
      'Intercom systems',
      'Perimeter security',
      'Fire detection systems',
      'Data center water leak detection'
    ]
  },
  {
    id: 3,
    title: 'Communication',
    description: 'PABX, IPBX, intercom systems, and advanced communication solutions for seamless business operations.',
    icon: <FaComments className="text-5xl text-primary mb-6" />,
    image: 'https://images.unsplash.com/photo-1557597883-aac6bf4a3d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/communication',
    features: [
      'PABX systems',
      'IPBX solutions',
      'Intercom systems',
      'MATV systems',
      'IPTV solutions',
      'Unified communications'
    ]
  },
  {
    id: 4,
    title: 'ICT Infrastructure',
    description: 'Building backbone networks, LAN, building management systems, and power backup solutions for reliable operations.',
    icon: <FaServer className="text-5xl text-primary mb-6" />,
    image: 'https://images.unsplash.com/photo-1558494950-b8e691d7a21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/solutions/ict-infrastructure',
    features: [
      'Building backbone networks',
      'LAN infrastructure',
      'Building management systems',
      'IP power backup solutions',
      'Data center design',
      'Server room setup'
    ]
  }
];

const Solutions = () => {
  return (
    <>
      <SolutionHero 
        title="Our Solutions" 
        description="Discover our comprehensive range of technology solutions designed to meet the unique needs of your business."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Innovative Technology Solutions</h2>
            <p className="section-subtitle">Tailored to Your Business Needs</p>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer a comprehensive range of technology solutions designed to help your business thrive in the digital age. From intelligent networks to advanced security systems, we have the expertise to meet your unique needs.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-center lg:text-left">
                    {solution.icon}
                    <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={solution.link} className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Transform Your Business with Our Solutions?" 
        description="Contact us today to discuss how our innovative technology solutions can help your business thrive."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Solutions;