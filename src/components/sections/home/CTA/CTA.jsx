import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { doctorData } from '../../../../data/doctorData';
import { fadeInUp, staggerContainer } from '../../../../animations/variants';

const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-400/20 rounded-full blur-2xl" />

          <div className="relative px-8 md:px-12 py-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 text-teal-200 font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                  <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
                  Now Accepting New Patients
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Start Your Journey to{' '}
                  <span className="text-teal-200 italic">Better Health</span> Today
                </h2>
                <p className="text-teal-100/85 font-sans text-lg leading-relaxed mb-8">
                  Don't let hormonal imbalances hold you back. Schedule a consultation with 
                  Dr. Sandeep Kumar Sahu and get expert, personalized care.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${doctorData.phone}`}
                    className="flex items-center justify-center gap-2.5 bg-white text-teal-800 px-7 py-4 rounded-full font-heading font-bold text-base hover:bg-teal-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                  >
                    <Phone size={18} />
                    Call: {doctorData.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2.5 border-2 border-white/60 text-white px-7 py-4 rounded-full font-heading font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </Link>
                </div>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: Clock,
                    title: 'Morning OPD',
                    desc: 'Mon – Sat\n10:00 AM – 2:00 PM',
                  },
                  {
                    icon: Clock,
                    title: 'Evening OPD',
                    desc: 'Mon – Sat\n5:00 PM – 8:00 PM',
                  },
                  {
                    icon: MapPin,
                    title: 'Clinic Address',
                    desc: 'Sai Shree Health Care\nMangalabag, Cuttack',
                  },
                  {
                    icon: Phone,
                    title: 'Contact',
                    desc: '+91 70085 12773\nFor Appointments',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-teal-400/20 rounded-lg flex items-center justify-center">
                        <Icon size={15} className="text-teal-200" />
                      </div>
                      <span className="font-heading font-semibold text-white text-sm">{title}</span>
                    </div>
                    <p className="text-teal-100/80 font-sans text-sm whitespace-pre-line pl-11">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
