import { FaHeadset, FaWrench, FaFileContract, FaChartLine, FaShieldAlt, FaClipboardList } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'SVL Care Response',
    description: 'Dedicated support team for rapid response to technical issues.',
    icon: <FaHeadset className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Annual Maintenance',
    description: 'Comprehensive annual maintenance contracts to ensure system reliability.',
    icon: <FaWrench className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Service Level Agreements',
    description: 'Customized SLAs to meet your business needs and ensure uptime.',
    icon: <FaFileContract className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Consultancy Services',
    description: 'Expert guidance to optimize your IT infrastructure and processes.',
    icon: <FaChartLine className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Help Desk Service',
    description: '24/7 help desk support for resolving technical issues efficiently.',
    icon: <FaClipboardList className="text-4xl text-primary mb-4" />
  },
  {
    title: 'IT & Security System Audits',
    description: 'Comprehensive audits to identify vulnerabilities and improve security.',
    icon: <FaShieldAlt className="text-4xl text-primary mb-4" />
  }
];

const ManagedServices = () => {
  return (
    <>
      <SolutionHero 
        title="Managed Services Solutions" 
        description="Empower your business with reliable managed services, including SVL care response, annual maintenance, service level agreements, consultancy services, help desk support, and IT/security audits."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="SVL Care Response"
        description="Our dedicated SVL Care Response team ensures rapid resolution of technical issues, minimizing downtime and maximizing productivity for your business."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          '24/7 technical support',
          'Rapid issue resolution',
          'Proactive monitoring',
          'Dedicated account manager',
          'Customized support plans',
          'Remote and on-site assistance'
        ]}
      />
      
      <SolutionDetails 
        title="Annual Maintenance Contracts"
        description="Our annual maintenance contracts ensure your systems remain in optimal condition, reducing the risk of unexpected failures and extending equipment lifespan."
        image="/tech.jpg"
        imagePosition="left"
        features={[
          'Preventive maintenance',
          'Regular system health checks',
          'Priority support',
          'Discounted repair rates',
          'Spare parts management',
          'Compliance with manufacturer guidelines'
        ]}
      />
      
      <SolutionDetails 
        title="IT & Security System Audits"
        description="Our comprehensive IT and security system audits identify vulnerabilities, assess risks, and provide actionable recommendations to strengthen your infrastructure."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'Vulnerability assessments',
          'Risk analysis',
          'Compliance audits',
          'Security policy reviews',
          'Detailed audit reports',
          'Actionable recommendations'
        ]}
      />
      
      <SolutionCTA 
        title="Enhance Your Business with Managed Services"
        description="Contact us today to discuss how our managed services can improve your IT operations, reduce costs, and ensure business continuity."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default ManagedServices;