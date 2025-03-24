import { FaDatabase, FaCashRegister, FaHospital, FaUsers, FaChartBar, FaHeadset, FaCloud } from 'react-icons/fa';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionDetails from '../../components/solutions/SolutionDetails';
import SolutionCTA from '../../components/solutions/SolutionCTA';

const features = [
  {
    title: 'ERP Systems',
    description: 'Comprehensive enterprise resource planning solutions to streamline business operations.',
    icon: <FaDatabase className="text-4xl text-primary mb-4" />
  },
  {
    title: 'POS Systems',
    description: 'Point of sale systems designed for retail and hospitality businesses.',
    icon: <FaCashRegister className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Hospital Management System',
    description: 'Integrated solutions for managing hospital operations and patient care.',
    icon: <FaHospital className="text-4xl text-primary mb-4" />
  },
  {
    title: 'HR and Payroll',
    description: 'Efficient human resource and payroll management systems for businesses.',
    icon: <FaUsers className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Business Intelligence',
    description: 'Data-driven insights and analytics to support strategic decision-making.',
    icon: <FaChartBar className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Help Desk Solutions',
    description: 'Customer support and IT service management tools for efficient issue resolution.',
    icon: <FaHeadset className="text-4xl text-primary mb-4" />
  },
  {
    title: 'Microsoft Office 365',
    description: 'Cloud-based productivity tools for collaboration and communication.',
    icon: <FaCloud className="text-4xl text-primary mb-4" />
  }
];

const SoftwareApplications = () => {
  return (
    <>
      <SolutionHero 
        title="Software & Applications Solutions" 
        description="Empower your business with cutting-edge software solutions, including ERP systems, POS systems, hospital management, HR and payroll, business intelligence, help desk solutions, and Microsoft Office 365."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      
      <SolutionFeatures features={features} />
      
      <SolutionDetails 
        title="ERP Systems"
        description="Our enterprise resource planning (ERP) solutions integrate all aspects of your business operations into a single platform, enabling better decision-making and operational efficiency."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'Centralized data management',
          'Real-time reporting and analytics',
          'Customizable modules',
          'Scalable for growing businesses',
          'Integration with third-party apps',
          'Cloud and on-premise deployment'
        ]}
      />
      
      <SolutionDetails 
        title="POS Systems"
        description="Our point of sale (POS) systems are designed to enhance customer experience and streamline sales operations for retail and hospitality businesses."
        image="/tech.jpg"
        imagePosition="left"
        features={[
          'Intuitive user interface',
          'Inventory management',
          'Payment processing integration',
          'Sales reporting and analytics',
          'Multi-location support',
          'Mobile POS options'
        ]}
      />
      
      <SolutionDetails 
        title="Hospital Management System"
        description="Our hospital management system provides end-to-end solutions for managing patient records, appointments, billing, and other critical hospital operations."
        image="https://images.unsplash.com/photo-1580757468214-c73f7dbe7e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        features={[
          'Patient record management',
          'Appointment scheduling',
          'Billing and invoicing',
          'Laboratory and pharmacy integration',
          'Telemedicine support',
          'Compliance with healthcare regulations'
        ]}
      />
      
      <SolutionCTA 
        title="Transform Your Business with Software Solutions"
        description="Contact us today to discuss how our software and applications solutions can streamline your operations and drive growth."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default SoftwareApplications;