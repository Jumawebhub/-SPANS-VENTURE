import SolutionHero from '../components/solutions/SolutionHero';
import ServicesList from '../components/services/ServicesList';
import CallToAction from '../components/home/CallToAction';

const Services = () => {
  return (
    <>
      <SolutionHero 
        title="Our Services" 
        description="Professional technology services to support your business needs and ensure optimal performance."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      <ServicesList />
      <CallToAction 
        title="Need Professional Technology Services?" 
        description="Our expert team is ready to assist you with all your technology service needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;