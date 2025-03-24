import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSolutionsDropdown(false);
  };

  const toggleSolutionsDropdown = (e) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setSolutionsDropdown(!solutionsDropdown);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="z-10" onClick={closeMenu}>
            <img src={logo} alt="SPANS VENTURE Limited Logo" className="h-20" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-secondary focus:outline-none z-10" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
            <div className="relative group">
              <NavLink 
                to="/solutions" 
                className={({isActive}) => isActive ? 'nav-link active flex items-center' : 'nav-link flex items-center'}
              >
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NavLink>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <NavLink to="/solutions/intelligent-network" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  ICT infrastructure
                  </NavLink>
                  <NavLink to="/solutions/intelligent-security" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Integrated Physical security systems
                  </NavLink>
                  <NavLink to="/solutions/communication" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Business Communication Solutions
                  </NavLink>
                  <NavLink to="/solutions/ict-infrastructure" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Cloud solutions/ SaaS
                  </NavLink>
                  <NavLink to="/solutions/communication" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Automation and IoT
                  </NavLink>
                  <NavLink to="/solutions/SoftwareApplications" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Softwares and Applications
                  </NavLink>
                  <NavLink to="/solutions/ManagedServices" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">
                  Managed Services
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/services" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              Services
            </NavLink>
            <NavLink to="/clients" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              Clients
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
            <Link to="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className={`fixed inset-0 bg-white lg:hidden transition-all duration-300 z-40 flex flex-col justify-center items-center space-y-6 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <NavLink to="/" className="nav-link text-xl" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link text-xl" onClick={closeMenu}>
              About
            </NavLink>
            <div className="relative">
              <button 
                className="nav-link text-xl flex items-center"
                onClick={toggleSolutionsDropdown}
              >
                Solutions
                <svg className={`w-5 h-5 ml-1 transition-transform duration-300 ${solutionsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mt-2 space-y-2 ${solutionsDropdown ? 'block' : 'hidden'}`}>
                <NavLink to="/solutions/intelligent-network" className="block py-2 text-center text-lg hover:text-primary" onClick={closeMenu}>
                  Intelligent Network
                </NavLink>
                <NavLink to="/solutions/intelligent-security" className="block py-2 text-center text-lg hover:text-primary" onClick={closeMenu}>
                  Intelligent Security
                </NavLink>
                <NavLink to="/solutions/communication" className="block py-2 text-center text-lg hover:text-primary" onClick={closeMenu}>
                  Communication
                </NavLink>
                <NavLink to="/solutions/ict-infrastructure" className="block py-2 text-center text-lg hover:text-primary" onClick={closeMenu}>
                  ICT Infrastructure
                </NavLink>
              </div>
            </div>
            <NavLink to="/services" className="nav-link text-xl" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/clients" className="nav-link text-xl" onClick={closeMenu}>
              Clients
            </NavLink>
            <NavLink to="/contact" className="nav-link text-xl" onClick={closeMenu}>
              Contact
            </NavLink>
            <Link to="/contact" className="btn btn-primary mt-4" onClick={closeMenu}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;