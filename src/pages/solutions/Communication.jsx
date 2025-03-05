import { FaComments, FaPhone, FaHeadset, FaTv, FaGlobe, FaUsers } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'PABX Systems',
    description: 'Traditional private automatic branch exchange systems for business telephony.',
    icon: <FaPhone className="text-4xl text-primary mb-4" />
  },
  {
    title: 'IPBX Solutions',
    description: 'Modern IP-based private branch exchange systems for advanced communications.',
    icon: <FaGlobe className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Intercom Systems',
    description: 'Reliable intercom solutions for internal communication and access control.',
    icon: <FaHeadset className="text-4xl text-primary mb-4" />
  },
  {
    title: 'MATV Systems',
    description: 'Master antenna television systems for distributing TV signals.',
    icon: <FaTv className="text-4xl text-primary mb-4" />
  },
  {
    title: 'IPTV Solutions',
    description: 'Internet protocol television systems for digital content delivery.',
    icon: <FaGlobe className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Unified Communications',
    description: 'Integrated communication platforms for seamless business collaboration.',
    icon: <FaUsers className="text-4xl text-primary mb-4" />
  }
];

const Communication = () => {
  return (
    <>
      <SolutionHero 
        title="Communication Solutions" 
        description="PABX, IPBX, intercom systems, and advanced communication solutions for seamless business operations."
        image="https://images.unsplash.com/photo-1557597883-aac6bf4a3d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="PABX & IPBX Systems"
        description="We offer both traditional PABX and modern IPBX solutions to meet your business communication needs. Our systems provide reliable telephony services with advanced features to enhance productivity and customer service."
        image="/pabx.jpg"
        features={[
          'Scalable telephony solutions',
          'Advanced call management features',
          'Voicemail and auto-attendant',
          'Call recording and monitoring',
          'Integration with CRM systems',
          'Mobile extension capabilities'
        ]}
      />
      
      <SolutionDetails 
        title="Intercom & Access Control"
        description="Our intercom systems provide clear communication throughout your premises while enhancing security with access control features. These systems can be integrated with your existing security infrastructure for a comprehensive solution."
        image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        imagePosition="left"
        features={[
          'Audio and video intercom options',
          'IP-based intercom systems',
          'Integration with access control',
          'Mobile app connectivity',
          'Multi-location support',
          'Visitor management features'
        ]}
      />
      
      <SolutionDetails 
        title="MATV, IPTV & Unified Communications"
        description="We provide comprehensive television distribution systems, including traditional MATV and modern IPTV solutions. Our unified communications platforms integrate various communication channels for seamless collaboration across your organization."
        image="/coms.png"
        features={[
          'MATV system design and installation',
          'IPTV content delivery solutions',
          'Digital signage integration',
          'Unified messaging',
          'Video conferencing',
          'Team collaboration tools'
        ]}
      />
      
      <SolutionCTA 
        title="Upgrade Your Communication Systems"
        description="Contact us today to discuss how our communication solutions can enhance collaboration and efficiency in your business."
        buttonText="Request a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default Communication;
