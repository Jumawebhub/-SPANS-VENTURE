import Hero from '../components/home/Hero';
import TechnologyBanner from '../components/home/TechnologyBanner';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <TechnologyBanner />
      <Services />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;