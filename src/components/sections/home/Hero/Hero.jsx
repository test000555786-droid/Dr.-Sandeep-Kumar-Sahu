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

const specialties = [
  { label: 'Diabetes Management', pct: 97 },
  { label: 'Thyroid Disorders', pct: 95 },
  { label: 'Hormonal & Metabolic', pct: 93 },
];

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: 'var(--navbar-height)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-teal-950">
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Medical Background"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/80 via-teal-800/80 to-teal-600/70"></div>
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

      <div
        className="relative container-custom flex items-center"
        style={{ minHeight: 'calc(100svh - var(--navbar-height))' }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-6 md:py-8 lg:py-10">

          {/* LEFT — Text Content */}
          <div className="order-2 lg:order-1">
            {/* Credential badge */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
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

          {/* RIGHT — Full-Image Doctor Card */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Floating specialty badges */}
              {floatingBadges.map(({ icon: Icon, text, color, delay }) => (
                <motion.div
                  key={text}
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.4 }}
                  className={`absolute z-20 flex items-center gap-2 ${color} rounded-full px-3 py-1.5 shadow-xl font-heading text-xs font-semibold border border-white/40 backdrop-blur-sm`}
                  style={{
                    ...(text === 'Endocrinologist' ? { top: '-16px', left: '-28px' } : {}),
                    ...(text === 'Thyroid Expert' ? { bottom: '30%', left: '-44px' } : {}),
                    ...(text === 'Diabetes Specialist' ? { top: '20%', right: '-28px' } : {}),
                  }}
                >
                  <Icon size={12} />
                  {text}
                </motion.div>
              ))}

              {/* ══════════════════════════════════════
                  Full-Image Card — Full Bleed with Hover Reveal
              ══════════════════════════════════════ */}
              <div
                className="group relative w-80 md:w-[22rem] lg:w-[26rem] rounded-3xl cursor-pointer select-none"
                style={{ height: '560px' }}
              >
                {/* Ambient glow ring */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-teal-300 via-teal-500 to-emerald-500 opacity-40 blur-lg transition-all duration-500 group-hover:opacity-75 group-hover:blur-xl" />

                {/* Card shell — overflow-hidden clips photo + reveal */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/25 shadow-[0_8px_40px_rgba(20,184,166,0.3)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_64px_rgba(20,184,166,0.5)]">

                  {/* ── Full-bleed doctor photo ── */}
                  <img
                    src="/DR-SKS.jpeg"
                    alt="Dr. Sandeep Kumar Sahu — DM Endocrinologist Cuttack"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{ objectPosition: 'center 8%' }}
                  />

                  {/* Always-on bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/65 to-transparent transition-opacity duration-500" />

                  {/* Hover: deepen the overlay slightly */}
                  <div className="absolute inset-0 bg-teal-950/0 transition-colors duration-500 group-hover:bg-teal-950/25" />

                  {/* ── Top credential + verified row ── */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="bg-black/35 backdrop-blur-sm border border-white/15 text-white/80 text-[10px] font-heading font-semibold px-2.5 py-1 rounded-full tracking-wide">
                      MBBS · MD · DM
                    </div>
                    <div className="flex items-center gap-1.5 bg-teal-400 text-white text-[11px] font-heading font-bold px-3 py-1 rounded-full shadow-lg">
                      <Stethoscope size={11} />
                      Verified
                    </div>
                  </div>

                  {/* ──────────────────────────────────────
                      Sliding info panel:
                      Default   → translateY(0)   — shows name + tags
                      Hovered   → translateY(-140px) — reveals skill bars & clinic
                      We achieve this by placing ALL content in one panel and
                      using a negative translate on hover to push hidden content
                      into view from below.
                  ────────────────────────────────────── */}
                  <div
                    className="absolute left-0 right-0 z-10 px-5 pt-4 pb-5 transition-transform duration-500 ease-out group-hover:-translate-y-36"
                    style={{ top: '100%', marginTop: '-160px' }}
                  >
                    {/* ─ Hidden section (starts below visible area) ─ */}
                    {/* Skill bars */}
                    <div className="space-y-2.5 mb-4">
                      {specialties.map(({ label, pct }) => (
                        <div key={label}>
                          <div className="flex justify-between text-[11px] font-heading text-teal-100 mb-1">
                            <span>{label}</span>
                            <span className="text-teal-300 font-semibold">{pct}%</span>
                          </div>
                          <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: 'linear-gradient(90deg,#5eead4,#14b8a6)' }}
                              initial={false}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 1.1, delay: 0.1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Clinic row */}
                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/15 mb-4">
                      <div className="w-7 h-7 bg-teal-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-300/20">
                        <Activity size={13} className="text-teal-300" />
                      </div>
                      <div>
                        <div className="text-white text-[11px] font-heading font-semibold">Sai Shree Health Care</div>
                        <div className="text-teal-200/60 text-[10px] font-sans">Mangalabag, Cuttack · Mon–Sat</div>
                      </div>
                    </div>

                    {/* ─ Always-visible section ─ */}
                    <h2 className="text-white font-display font-bold text-xl leading-tight drop-shadow-lg mb-1">
                      Dr. Sandeep Kumar Sahu
                    </h2>
                    <p className="text-teal-300 text-xs font-heading font-medium mb-3">
                      DM Endocrinology · SCB Medical College, Cuttack
                    </p>

                    {/* Specialty tag pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {['Diabetes', 'Thyroid', 'Hormones', 'Metabolic'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-teal-400/20 backdrop-blur-sm border border-teal-300/30 text-teal-100 text-[10px] font-heading font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover hint */}
                    <p className="text-white/35 text-[10px] font-sans text-right mt-2 transition-opacity duration-300 group-hover:opacity-0 select-none">
                      Hover to explore ↑
                    </p>
                  </div>

                </div>
              </div>

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
