import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Stethoscope, ExternalLink } from 'lucide-react';
import { doctorData } from '../../../data/doctorData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top CTA Strip */}
      <div className="bg-teal-700">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading font-semibold text-white text-lg">
            Ready to take control of your health?
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${doctorData.phone}`}
              className="flex items-center gap-2 bg-white text-teal-700 px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-teal-50 transition-colors shadow-md"
            >
              <Phone size={15} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-white hover:text-teal-700 transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-teal-700 rounded-xl flex items-center justify-center">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  Dr. Sandeep Kumar Sahu
                </div>
                <div className="text-teal-400 text-xs font-heading">DM Endocrinology</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Providing expert endocrine care in Cuttack, Odisha. Specializing in Diabetes, 
              Thyroid disorders, and hormonal health for over a decade.
            </p>
            <div className="flex items-center gap-2 text-teal-400 text-sm font-heading">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              Accepting New Patients
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Dr. Sahu', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Health Blog', path: '/blogs' },
                { label: 'Patient Corner', path: '/patient-corner' },
                { label: 'Contact & Directions', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-teal-400 text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-700 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Specializations
            </h3>
            <ul className="space-y-3">
              {[
                'Diabetes Management',
                'Thyroid Disorders',
                'PCOS & Hormonal Health',
                'Pituitary Disorders',
                'Osteoporosis',
                'Obesity & Metabolic Syndrome',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-teal-400 text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-700 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact & Hours
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${doctorData.phone}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-teal-700/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-700 transition-colors mt-0.5">
                    <Phone size={14} className="text-teal-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-heading uppercase tracking-wide mb-0.5">Phone</div>
                    <div className="text-white text-sm font-medium hover:text-teal-400 transition-colors">{doctorData.phoneDisplay}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-700/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-teal-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-heading uppercase tracking-wide mb-0.5">Clinic</div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    Sai Shree Health Care<br />
                    Near Shreema Hospital,<br />
                    Ring Road, Mangalabag,<br />
                    Cuttack – 753001
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-700/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-teal-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-heading uppercase tracking-wide mb-0.5">OPD Hours</div>
                  <div className="text-slate-300 text-sm">
                    Mon–Sat: 10AM–2PM<br />
                    Mon–Sat: 5PM–8PM
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm font-sans">
            © {year} Dr. Sandeep Kumar Sahu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={doctorData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 text-sm font-sans transition-colors flex items-center gap-1"
            >
              <ExternalLink size={12} />
              Get Directions
            </a>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500 text-sm">MBBS, MD, DM (Endocrinology)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
