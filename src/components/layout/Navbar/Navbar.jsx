import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Stethoscope } from 'lucide-react';
import { doctorData } from '../../../data/doctorData';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Patient Corner', path: '/patient-corner' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const scrollFrameRef = useRef(null);

  useEffect(() => {
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 50;
      scrollFrameRef.current = null;
      setScrolled((prevScrolled) => (prevScrolled === nextScrolled ? prevScrolled : nextScrolled));
    };

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const nextScrolled = window.scrollY > 50;
    setScrolled((prevScrolled) => (prevScrolled === nextScrolled ? prevScrolled : nextScrolled));
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }, [pathname, mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const logoColor = scrolled ? 'text-teal-800' : 'text-white';
  const subTextColor = scrolled ? 'text-teal-600' : 'text-white/75';
  const linkBase = scrolled
    ? 'text-slate-600 hover:text-teal-700 hover:bg-teal-50/70'
    : 'text-white/85 hover:text-white hover:bg-white/15';

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 box-border transition-colors duration-300 ${navBg}`}
        style={{ height: '80px' }}
      >
        <div className="container-custom h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                scrolled ? 'bg-teal-700' : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Stethoscope size={20} className="text-white" />
            </div>

            <div>
              <div className={`font-display font-bold text-lg leading-tight transition-colors duration-300 ${logoColor}`}>
                Dr. Sandeep Kumar Sahu
              </div>
              <div className={`text-xs font-heading font-medium tracking-wide transition-colors duration-300 ${subTextColor}`}>
                DM Endocrinology · Cuttack
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-heading font-medium text-sm transition-colors duration-200 ${
                    isActive
                      ? scrolled
                        ? 'text-teal-700 bg-teal-50'
                        : 'text-white bg-white/20'
                      : linkBase
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${doctorData.phone}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-[background-color,color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? 'bg-teal-700 text-white hover:bg-teal-800'
                  : 'bg-white text-teal-700 hover:bg-teal-50'
              }`}
            >
              <Phone size={15} />
              Call Now
            </a>

            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full font-heading font-semibold text-sm border-2 transition-[background-color,color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? 'border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-teal-700'
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors flex-shrink-0 ${
              scrolled ? 'text-slate-700 hover:bg-teal-50' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
            style={{ top: '80px' }}
          >
            <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
              
              {/* Links */}
              <nav className="flex flex-col gap-1 mb-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-3.5 px-4 rounded-xl font-heading font-medium ${
                        isActive
                          ? 'text-teal-700 bg-teal-50'
                          : 'text-slate-700 hover:text-teal-700 hover:bg-teal-50/50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* CTA */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={`tel:${doctorData.phone}`}
                  className="flex items-center justify-center gap-2 bg-teal-700 text-white py-4 rounded-2xl font-semibold"
                >
                  <Phone size={18} />
                  Call: {doctorData.phoneDisplay}
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center border-2 border-teal-700 text-teal-700 py-4 rounded-2xl font-semibold"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
