import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Appointment', path: '/appointment' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center border-b',
        scrolled ? 'bg-white border-[#EBECF0] shadow-sm' : 'bg-white border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-[900] text-2xl tracking-tighter text-primary uppercase">
              Paras Physiocare
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[14px] font-bold uppercase tracking-[0.5px] transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-text-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="bg-primary text-white px-6 py-3 rounded-lg text-[14px] font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-3 py-3 text-base font-medium rounded-md transition-colors',
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
                >
                  Book Appointment
                </Link>
                <div className="flex justify-center space-x-4 pt-2">
                  <a
                    href={`tel:${CLINIC_INFO.mobile}`}
                    className="p-3 bg-gray-100 rounded-full text-blue-600"
                  >
                    <Phone size={20} />
                  </a>
                  <a
                    href={CLINIC_INFO.whatsapp}
                    className="p-3 bg-gray-100 rounded-full text-green-600"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
