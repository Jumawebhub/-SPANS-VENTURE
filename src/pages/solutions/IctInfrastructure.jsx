import { FaServer, FaNetworkWired, FaBuilding, FaBatteryFull, FaDatabase, FaCloudUploadAlt } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'Building Backbone Networks',
    description: 'Robust network infrastructure to support your entire building or campus.',
    icon: <FaNetworkWired className="text-4xl text-primary mb-4" />
  },
  {
    title: 'LAN Infrastructure',
    description: 'Comprehensive local area network solutions for seamless connectivity.',
    icon: <FaServer className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Building Management Systems',
    description: 'Integrated systems to monitor and control building operations.',
    icon: <FaBuilding className="text-4xl text-primary mb-4" />
  },
  {
    title: 'IP Power Backup',
    description: 'Reliable power backup solutions to ensure continuous operations.',
    icon: <FaBatteryFull className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Data Center Solutions',
    description: 'Comprehensive data center design, implementation, and management.',
    icon: <FaDatabase className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions to support your business applications.',
    icon: <FaCloudUploadAlt className="text-4xl text-primary mb-4" />
  }
];

const IctInfrastructure = () => {
  return (
    <>
      <SolutionHero 
        title="ICT Infrastructure Solutions" 
        description="Building backbone networks, LAN, building management systems, and power backup solutions for reliable operations."
        image="https://images.unsplash.com/photo-1558494950-b8e691d7a21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="Building Backbone Networks & LAN"
        description="We design and implement robust network infrastructure to support your entire building or campus. Our comprehensive LAN solutions ensure seamless connectivity throughout your organization, with scalability to accommodate future growth."
        image="/lan.jpg"
        features={[
          'Backbone network design and implementation',
          'High-performance switching and routing',
          'Redundant network architecture',
          'Wireless LAN solutions',
          'Network security integration',
          'Performance monitoring and optimization'
        ]}
      />
      
      <SolutionDetails 
        title="Building Management & Power Backup"
        description="Our integrated building management systems help you monitor and control various building operations efficiently. We also provide reliable power backup solutions to ensure continuous operations during power outages."
        image="/backup.jpg"
        imagePosition="left"
        features={[
          'HVAC monitoring and control',
          'Lighting management systems',
          'Security system integration',
          'UPS solutions',
          'Generator backup systems',
          'Power monitoring and management'
        ]}
      />
      
      <SolutionDetails 
        title="Data Center & Cloud Infrastructure"
        description="We offer comprehensive data center solutions, from design and implementation to ongoing management. Our scalable cloud infrastructure services support your business applications with reliability, security, and performance."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'Data center design and build',
          'Server room optimization',
          'Cooling and power management',
          'Private cloud solutions',
          'Hybrid cloud architecture',
          'Disaster recovery planning'
        ]}
      />
      
      <SolutionCTA 
        title="Build a Robust ICT Infrastructure"
        description="Contact us today to discuss how our ICT infrastructure solutions can provide a solid foundation for your business technology needs."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default IctInfrastructure;
