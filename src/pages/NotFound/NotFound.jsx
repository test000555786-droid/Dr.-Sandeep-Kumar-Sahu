import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { pageTransition } from '../../animations/variants';
import { doctorData } from '../../data/doctorData';

const NotFound = () => {
  return (
    <motion.div {...pageTransition} className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
      <div className="text-center max-w-lg mx-auto">
        {/* 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-display font-bold text-teal-50 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🔬</div>
          </div>
        </div>

        <h1 className="font-display font-bold text-slate-900 text-3xl mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-500 font-sans text-lg mb-8">
          The page you're looking for seems to have gone missing. 
          Let us help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary"
          >
            <Home size={17} />
            Back to Home
          </Link>
          <a
            href={`tel:${doctorData.phone}`}
            className="btn-outline"
          >
            <Phone size={17} />
            Call Us
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm font-heading mb-4">Or navigate to:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Patient Corner', path: '/patient-corner' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-teal-700 hover:text-teal-900 font-heading font-semibold text-sm hover:underline flex items-center gap-1"
              >
                {link.label}
                <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
