import SolutionHero from '../components/solutions/SolutionHero';
import ClientsList from '../components/clients/ClientsList';
import ClientTestimonials from '../components/clients/ClientTestimonials';
import CallToAction from '../components/home/CallToAction';

const Clients = () => {
  return (
    <>
      <SolutionHero 
        title="Our Clients" 
        description="Trusted by leading organizations across various industries."
        image="https://images.unsplash.com/photo-1557597883-aac6bf4a3d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
      />
      <ClientsList />
      <ClientTestimonials />
      <CallToAction 
        title="Join Our Growing List of Satisfied Clients" 
        description="Experience the difference our technology solutions can make for your business."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default Clients;