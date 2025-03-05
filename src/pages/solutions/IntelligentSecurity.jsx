import { FaShieldAlt, FaVideo, FaBell, FaComments, FaFire, FaTint } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'Smart CCTV Cameras',
    description: 'Advanced surveillance systems with intelligent monitoring capabilities.',
    icon: <FaVideo className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Integrated Alarm Systems',
    description: 'Comprehensive alarm solutions that integrate with your security infrastructure.',
    icon: <FaBell className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Intercom Systems',
    description: 'Modern intercom solutions for controlled access and communication.',
    icon: <FaComments className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Perimeter Security',
    description: 'Advanced perimeter protection to secure your property boundaries.',
    icon: <FaShieldAlt className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Fire Detection',
    description: 'Early warning fire detection systems to protect lives and assets.',
    icon: <FaFire className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Water Leak Detection',
    description: 'Specialized systems to detect water leaks in data centers and critical areas.',
    icon: <FaTint className="text-4xl text-primary mb-4" />
  }
];

const IntelligentSecurity = () => {
  return (
    <>
      <SolutionHero 
        title="Intelligent Security Solutions" 
        description="Smart CCTV cameras, integrated alarm systems, and comprehensive security solutions to protect your business assets."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="Smart CCTV & Surveillance Systems"
        description="Our intelligent CCTV solutions provide advanced surveillance capabilities with features like motion detection, facial recognition, and remote monitoring. These systems help you maintain comprehensive security coverage while providing valuable insights for your business."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'HD and 4K camera options',
          'Intelligent video analytics',
          'Motion detection and alerts',
          'Remote viewing and management',
          'Cloud storage options',
          'Integration with other security systems'
        ]}
      />
      
      <SolutionDetails 
        title="Alarm Systems & Intercom Solutions"
        description="Our integrated alarm systems provide comprehensive protection against intrusion, with seamless integration with your existing security infrastructure. Our modern intercom solutions enable controlled access and clear communication throughout your premises."
        image="https://images.unsplash.com/photo-1557597883-aac6bf4a3d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        imagePosition="left"
        features={[
          'Integrated alarm systems',
          'Motion and glass break sensors',
          'Mobile alerts and notifications',
          'IP-based intercom systems',
          'Video intercom options',
          'Access control integration'
        ]}
      />
      
      <SolutionDetails 
        title="Fire Detection & Water Leak Protection"
        description="Our early warning fire detection systems help protect lives and assets by providing timely alerts in case of fire emergencies. For data centers and critical infrastructure, our specialized water leak detection systems prevent costly damage from water leaks."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'Advanced smoke and heat detection',
          'Addressable fire alarm systems',
          'Emergency notification systems',
          'Water leak detection sensors',
          'Real-time monitoring and alerts',
          'Integration with building management systems'
        ]}
      />
      
      <SolutionCTA 
        title="Enhance Your Security Infrastructure"
        description="Contact us today to discuss how our intelligent security solutions can protect your business assets and provide peace of mind."
        buttonText="Schedule a Security Assessment"
        buttonLink="/contact"
      />
    </>
  );
};

export default IntelligentSecurity;