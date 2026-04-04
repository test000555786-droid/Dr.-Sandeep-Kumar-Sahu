import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import { doctorData } from '../../../../data/doctorData';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../../../animations/variants';

const highlights = [
  'DM (Endocrinology) — Highest specialist degree in the field',
  'One of few DM-qualified Endocrinologists in Odisha',
  '10+ years of focused clinical experience',
  'Expert in Diabetes, Thyroid & Hormonal disorders',
  'Former Faculty, SCB Medical College, Cuttack',
  '15,000+ patients treated successfully',
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background shape */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-50 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-3xl -z-10" />

            {/* Main visual card */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-8 text-white shadow-teal-lg">
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center border-2 border-white/25">
                  <span className="font-display font-bold text-4xl text-white">S</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Dr. Sandeep Kumar Sahu</h3>
                  <p className="text-teal-200 font-heading text-sm">DM Endocrinology</p>
                  <p className="text-teal-300/80 font-sans text-xs mt-0.5">SCB Medical College</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { v: '10+', l: 'Years' },
                  { v: '15K+', l: 'Patients' },
                  { v: 'DM', l: 'Qualified' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center bg-white/10 rounded-2xl p-3">
                    <div className="font-heading font-bold text-2xl text-white">{v}</div>
                    <div className="text-teal-200 text-xs font-sans">{l}</div>
                  </div>
                ))}
              </div>

              {/* Education cards */}
              <div className="space-y-3">
                {doctorData.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                      edu.highlight ? 'bg-white/20 border border-white/30' : 'bg-white/8'
                    }`}
                  >
                    <GraduationCap size={16} className={edu.highlight ? 'text-teal-200' : 'text-teal-300'} />
                    <div className="flex-1">
                      <div className="text-white font-heading font-semibold text-sm">{edu.degree}</div>
                      <div className="text-teal-200/80 text-xs font-sans">{edu.institution}</div>
                    </div>
                    {edu.highlight && (
                      <span className="text-xs bg-teal-300 text-teal-900 font-heading font-bold px-2 py-0.5 rounded-full">
                        Top
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-tag">
              <span className="w-6 h-px bg-teal-700 inline-block" />
              About the Doctor
              <span className="w-6 h-px bg-teal-700 inline-block" />
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Cuttack's Trusted{' '}
              <span className="text-teal-700 italic">Endocrinology</span> Expert
            </h2>

            <p className="text-slate-600 text-lg font-sans leading-relaxed mb-6">
              Dr. Sandeep Kumar Sahu brings over a decade of specialized experience in managing 
              complex hormonal and metabolic disorders. Trained at the prestigious SCB Medical 
              College with a DM (Endocrinology) — the highest qualification in the specialty — 
              he offers world-class endocrine care right here in Cuttack.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {highlights.map((point) => (
                <motion.li
                  key={point}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-sans text-base">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary">
                Learn More About Dr. Sahu
                <ArrowRight size={17} />
              </Link>
              <a href={`tel:${doctorData.phone}`} className="btn-outline">
                <Stethoscope size={17} />
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
