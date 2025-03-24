import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import IntelligentNetwork from './pages/solutions/IntelligentNetwork';
import IntelligentSecurity from './pages/solutions/IntelligentSecurity';
import Communication from './pages/solutions/Communication';
import IctInfrastructure from './pages/solutions/IctInfrastructure';
import ScrollToTop from './components/utils/ScrollToTop';
import SoftwareApplications from './pages/solutions/SoftwareApplications';
import ManagedServices from './pages/solutions/Managed Services';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/intelligent-network" element={<IntelligentNetwork />} />
          <Route path="/solutions/intelligent-security" element={<IntelligentSecurity />} />
          <Route path="/solutions/communication" element={<Communication />} />
          <Route path="/solutions/ict-infrastructure" element={<IctInfrastructure />} />
          <Route path="/Solutions/SoftwareApplications" element={<SoftwareApplications/>}/>
          <Route path="/solutions/ManagedServices" element={<ManagedServices/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;