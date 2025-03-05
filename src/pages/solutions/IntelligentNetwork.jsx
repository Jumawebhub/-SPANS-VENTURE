import { FaNetworkWired, FaWifi, FaEthernet, FaPhone, FaGlobe, FaChartLine } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'High-Speed Internet',
    description: 'Fast, reliable internet connectivity solutions for businesses of all sizes.',
    icon: <FaGlobe className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Structured Cabling',
    description: 'Professional cabling infrastructure for reliable network performance.',
    icon: <FaEthernet className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Fiber Optics',
    description: 'High-speed fiber optic solutions for maximum data transfer rates.',
    icon: <FaNetworkWired className="text-4xl text-primary mb-4" />
  },
  {
    title: 'IP Telephone Systems',
    description: 'Advanced IP telephony solutions for modern business communications.',
    icon: <FaPhone className="text-4xl text-primary mb-4" />
  },
  {
    title: 'LAN and WAN',
    description: 'Comprehensive local and wide area network solutions for seamless connectivity.',
    icon: <FaWifi className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Network Monitoring',
    description: 'Proactive monitoring and maintenance to ensure optimal network performance.',
    icon: <FaChartLine className="text-4xl text-primary mb-4" />
  }
];

const IntelligentNetwork = () => {
  return (
    <>
      <SolutionHero 
        title="Intelligent Network Solutions" 
        description="High-speed internet, structured cabling, fiber optics, and comprehensive network solutions for your business."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="High-Speed Internet & Structured Cabling"
        description="We provide fast, reliable internet connectivity solutions tailored to your business needs. Our structured cabling services ensure a solid foundation for your network infrastructure, delivering consistent performance and scalability."
        image="/audit.png" // ✅ Fixed image reference
        features={[
          'Business-grade internet with guaranteed uptime',
          'Dedicated bandwidth options',
          'Structured cabling design and installation',
          'Cable management and organization',
          'Network infrastructure documentation',
          'Future-proof scalable solutions'
        ]}
      />
      
      <SolutionDetails 
        title="Fiber Optics & IP Telephone Systems"
        description="Our fiber optic solutions provide the highest data transfer rates available, ensuring your business can handle large data volumes efficiently. We also offer advanced IP telephone systems that integrate seamlessly with your network infrastructure."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        imagePosition="left"
        features={[
          'Fiber optic cable installation and testing',
          'Fiber to the premises (FTTP) solutions',
          'IP-based telephone systems',
          'Unified communications integration',
          'Voice over IP (VoIP) services',
          'Call management and reporting'
        ]}
      />
      
      <SolutionDetails 
        title="LAN, WAN & Network Monitoring"
        description="We design, implement, and maintain comprehensive local and wide area network solutions that connect your business locations securely and efficiently. Our proactive network monitoring services ensure optimal performance and quick resolution of potential issues."
        image="/network.jpg"
        features={[
          'LAN design and implementation',
          'WAN connectivity solutions',
          'Network security integration',
          '24/7 network monitoring',
          'Performance optimization',
          'Proactive maintenance and updates'
        ]}
      />
      
      <SolutionCTA 
        title="Ready to Upgrade Your Network Infrastructure?"
        description="Contact us today to discuss how our intelligent network solutions can improve your business connectivity and performance."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default IntelligentNetwork;

