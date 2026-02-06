
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Registration', path: '/registration' },
    { name: 'Committees', path: '/committees' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-custom border-b ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-red-900/30' : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex flex-col">
            <span className="text-2xl font-black tracking-tighter transition-custom">
              <span className="text-red-600 group-hover:text-orange-500 transition-custom">FUSION</span>
              <span className="text-white">2K26</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500/60 leading-none">
              Madanapalle
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-custom relative group ${
                  isActive(link.path) ? 'text-white' : 'text-slate-400 hover:text-red-500'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600 fire-glow"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="ml-6 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] border border-red-600 text-white hover:bg-red-600 hover:fire-glow transition-custom"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-custom overflow-hidden ${isOpen ? 'max-h-screen bg-black/95 border-b border-red-900/30' : 'max-h-0'}`}>
        <div className="px-8 py-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-black uppercase tracking-tighter ${
                isActive(link.path) ? 'text-red-600' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-red-500 font-bold uppercase tracking-widest text-xs pt-4 border-t border-white/10">
            Contact Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
