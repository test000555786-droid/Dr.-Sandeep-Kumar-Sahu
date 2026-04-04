import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Award, Users, Star, ChevronDown, Stethoscope, Activity, Zap } from 'lucide-react';
import { doctorData } from '../../../../data/doctorData';

const statItems = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '15,000+', label: 'Patients Treated' },
  { icon: Star, value: 'DM', label: 'Superspecialist' },
  { icon: Activity, value: '98%', label: 'Success Rate' },
];

const floatingBadges = [
  { icon: Stethoscope, text: 'Endocrinologist', color: 'bg-white text-teal-700', delay: 0.8 },
  { icon: Zap, text: 'Thyroid Expert', color: 'bg-teal-50 text-teal-700', delay: 1.0 },
  { icon: Activity, text: 'Diabetes Specialist', color: 'bg-emerald-50 text-emerald-700', delay: 1.2 },
];

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'calc(100vh - 0px)', paddingTop: '80px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600">
        {/* Mesh pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20">

          {/* LEFT — Text Content */}
          <div className="order-2 lg:order-1">
            {/* Credential badge */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
              <span className="text-teal-100 text-sm font-heading font-medium">
                MBBS · MD · DM Endocrinology — SCB Medical College
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Expert{' '}
              <span className="text-teal-300">Endocrine Care</span>
              <br />
              <span className="italic font-normal">in Cuttack</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-teal-100/90 text-lg md:text-xl font-sans leading-relaxed max-w-xl mb-8"
            >
              Dr. Sandeep Kumar Sahu — one of Odisha's few{' '}
              <strong className="text-white font-semibold">DM-qualified Endocrinologists</strong>,
              specializing in Diabetes, Thyroid, Hormonal & Metabolic disorders.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={`tel:${doctorData.phone}`}
                className="flex items-center justify-center gap-2.5 bg-white text-teal-800 px-7 py-4 rounded-full font-heading font-bold text-base hover:bg-teal-50 transition-[background-color,color,border-color,box-shadow,transform] duration-300 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Phone size={18} />
                Call: {doctorData.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2.5 border-2 border-white/70 text-white px-7 py-4 rounded-full font-heading font-semibold text-base hover:bg-white/10 hover:border-white transition-[background-color,color,border-color,box-shadow,transform] duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {statItems.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4 text-center hover:bg-white/12 transition-colors"
                >
                  <Icon size={18} className="text-teal-300 mx-auto mb-2" />
                  <div className="text-white font-heading font-bold text-xl leading-none">{value}</div>
                  <div className="text-teal-200/80 text-xs font-sans mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Doctor Visual Card */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Doctor card */}
              <div className="relative w-72 md:w-80 lg:w-96">
                {/* Background card */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl transform rotate-2" />

                {/* Main card */}
                <div className="relative bg-white/12 backdrop-blur-md rounded-3xl border border-white/25 p-8 shadow-2xl">
                  {/* Doctor avatar */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto rounded-full bg-teal-gradient flex items-center justify-center border-4 border-white/30 shadow-xl">
                      <span className="text-white font-display font-bold text-4xl">S</span>
                    </div>
                    <div className="absolute -bottom-1 right-1/2 translate-x-12 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                      <Stethoscope size={14} className="text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h2 className="font-display font-bold text-white text-xl mb-1">
                      Dr. Sandeep Kumar Sahu
                    </h2>
                    <p className="text-teal-200 text-sm font-heading font-medium mb-1">
                      DM (Endocrinology)
                    </p>
                    <p className="text-teal-300/80 text-xs font-sans">
                      SCB Medical College, Cuttack
                    </p>
                  </div>

                  {/* Skills bars */}
                  {[
                    { label: 'Diabetes', pct: 97 },
                    { label: 'Thyroid', pct: 95 },
                    { label: 'Hormonal', pct: 93 },
                  ].map(({ label, pct }) => (
                    <div key={label} className="mb-3">
                      <div className="flex justify-between text-xs font-heading text-teal-100 mb-1">
                        <span>{label}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-teal-300 rounded-full"
                          initial={false}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Clinic */}
                  <div className="mt-5 pt-5 border-t border-white/15 flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-400/20 rounded-lg flex items-center justify-center">
                      <Activity size={14} className="text-teal-300" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-heading font-semibold">Sai Shree Health Care</div>
                      <div className="text-teal-200/70 text-xs font-sans">Mangalabag, Cuttack</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map(({ icon: Icon, text, color, delay }) => (
                <motion.div
                  key={text}
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.4 }}
                  className={`absolute flex items-center gap-2 ${color} rounded-full px-3 py-1.5 shadow-lg font-heading text-xs font-semibold border border-white/40`}
                  style={{
                    ...(text === 'Endocrinologist' ? { top: '-16px', left: '-24px' } : {}),
                    ...(text === 'Thyroid Expert' ? { bottom: '30%', left: '-40px' } : {}),
                    ...(text === 'Diabetes Specialist' ? { top: '20%', right: '-20px' } : {}),
                  }}
                >
                  <Icon size={12} />
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-heading uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
