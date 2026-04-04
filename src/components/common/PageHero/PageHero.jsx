import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <div className="page-hero-bg pt-20">
      <div className="relative container-custom py-16 md:py-20">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6 text-teal-200/70 text-sm font-heading"
          >
            <Link to="/" className="flex items-center gap-1 hover:text-teal-200 transition-colors">
              <Home size={13} />
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <ChevronRight size={13} className="text-teal-400/50" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-teal-200 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-teal-100">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-teal-100/85 font-sans text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="relative h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ height: '48px' }}>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default PageHero;
