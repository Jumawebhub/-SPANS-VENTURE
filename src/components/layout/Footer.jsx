import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="SPANS VENTURE Limited Logo" className="h-10 mb-6" />
            <p className="text-gray-300 mb-6">
            SPANS VENTURE Limited is an established ICT Company in East Africa with presence in Nairobi. We are an end-to-end ICT services and solutions provider with clients in Non-Profits, Academic and Commercial Institutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/spansventuresltd" target="_blank" rel="noopener noreferrer" className="bg-primary bg-opacity-20 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300">
                <FaFacebookF className="text-primary" />
              </a>
              <a href="https://twitter.com/Spans_venturesltd" target="_blank" rel="noopener noreferrer" className="bg-primary bg-opacity-20 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300">
                <FaTwitter className="text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/Spansventuresld" target="_blank" rel="noopener noreferrer" className="bg-primary bg-opacity-20 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300">
                <FaLinkedinIn className="text-primary" />
              </a>
              <a href="https://www.instagram.com/Spansventuresld" target="_blank" rel="noopener noreferrer" className="bg-primary bg-opacity-20 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300">
                <FaInstagram className="text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link">Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/clients" className="footer-link">Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Our Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/intelligent-network" className="footer-link">Intelligent Network</Link>
              </li>
              <li>
                <Link to="/solutions/intelligent-security" className="footer-link">Intelligent Security</Link>
              </li>
              <li>
                <Link to="/solutions/communication" className="footer-link">Communication</Link>
              </li>
              <li>
                <Link to="/solutions/ict-infrastructure" className="footer-link">ICT Infrastructure</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span>P.O. Box 11931 - 00100,
                Nairobi, Kenya.</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3" />
                <span>Tel:Office: +254 - 02 - 2525113/4, Mobile ;+254-713801302</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <span>info@spansventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear}Copyright © SPANS VENTURES LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-primary">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-primary">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-primary">Powered by Jumawebhub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;