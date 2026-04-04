import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, CheckCircle2, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import { doctorData } from '../../data/doctorData';

const About = () => {
  return (
    <motion.div {...pageTransition}>
      <SEO
        title="About Dr. Sandeep Kumar Sahu | DM Endocrinologist, Cuttack"
        description="Learn about Dr. Sandeep Kumar Sahu — DM (Endocrinology), MBBS, MD from SCB Medical College Cuttack. Expert Endocrinologist with 10+ years experience treating Diabetes, Thyroid & Hormonal disorders."
        canonical="/about"
      />

      <PageHero
        title="About Dr. Sandeep Kumar Sahu"
        subtitle="A decade of dedicated expertise in Endocrinology — bringing world-class hormonal care to Cuttack."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* Main Profile Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left — Profile card */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-3xl p-8 text-white shadow-teal-lg sticky top-24">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-4 shadow-xl">
                    <span className="font-display font-bold text-4xl text-white">S</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-2xl">Dr. Sandeep Kumar Sahu</h2>
                  <p className="text-teal-200 font-heading text-sm mt-1">DM (Endocrinology)</p>
                  <p className="text-teal-300/80 font-sans text-xs mt-0.5">MBBS, MD, DM</p>
                </div>

                {/* Separator */}
                <div className="border-t border-white/15 my-5" />

                {/* Quick Info */}
                <div className="space-y-3">
                  {[
                    { label: 'Qualification', value: 'MBBS, MD, DM (Endocrinology)' },
                    { label: 'Institution', value: 'SCB Medical College, Cuttack' },
                    { label: 'Clinic', value: 'Sai Shree Health Care' },
                    { label: 'Location', value: 'Mangalabag, Cuttack' },
                    { label: 'Experience', value: '10+ Years' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-teal-300 text-xs font-heading uppercase tracking-wide">{label}</span>
                      <span className="text-white text-sm font-sans">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/15 my-5" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: '10+', l: 'Years' },
                    { v: '15K+', l: 'Patients' },
                    { v: '98%', l: 'Success' },
                  ].map(({ v, l }) => (
                    <div key={l} className="text-center bg-white/10 rounded-xl p-3">
                      <div className="font-heading font-bold text-xl text-white">{v}</div>
                      <div className="text-teal-200 text-xs font-sans">{l}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={`tel:${doctorData.phone}`}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-teal-800 py-3.5 rounded-full font-heading font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg"
                >
                  <Phone size={16} />
                  Call for Appointment
                </a>
              </div>
            </motion.div>

            {/* Right — Bio Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="section-tag">
                <span className="w-6 h-px bg-teal-700 inline-block" />
                Doctor's Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Committed to Excellence in{' '}
                <span className="text-teal-700 italic">Endocrine Health</span>
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 font-sans leading-relaxed space-y-4">
                <p>
                  Dr. Sandeep Kumar Sahu is among Odisha's most qualified Endocrinologists, having completed 
                  his entire medical education — MBBS, MD (General Medicine), and DM (Endocrinology) — 
                  at the prestigious Shri Ram Chandra Bhanj (SCB) Medical College, Cuttack, one of India's 
                  premier government medical institutions.
                </p>
                <p>
                  His DM (Endocrinology) degree is the highest postgraduate specialist qualification in 
                  the field of Endocrinology in India — equivalent to a fellowship level training — making 
                  him one of the very few DM-qualified Endocrinologists serving the people of Odisha.
                </p>
                <p>
                  With over a decade of focused clinical practice, Dr. Sahu has developed expertise in 
                  managing the full spectrum of endocrine disorders — from common conditions like diabetes 
                  and thyroid disease to rare conditions like pituitary tumors, adrenal disorders, and 
                  growth hormone deficiencies.
                </p>
                <p>
                  His practice philosophy centers on personalized, evidence-based care — taking time to 
                  understand each patient's unique situation, explaining diagnoses clearly, and creating 
                  management plans that are practical, effective, and sustainable.
                </p>
              </div>

              {/* Mission Box */}
              <div className="mt-8 bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-600">
                <h4 className="font-heading font-bold text-teal-800 text-lg mb-2">
                  Our Mission
                </h4>
                <p className="text-teal-700 font-sans leading-relaxed">
                  "To provide the highest quality endocrine care to every patient, with compassion, 
                  scientific rigor, and a commitment to long-term wellbeing — making specialist 
                  hormonal health accessible to the people of Cuttack and Odisha."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding bg-mesh">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeader
            tag="Education"
            title="Academic Excellence"
            subtitle="A continuous pursuit of the highest qualifications in Endocrinology."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200 hidden md:block" />

            <div className="space-y-6">
              {doctorData.education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                    edu.highlight
                      ? 'bg-teal-700 shadow-teal'
                      : 'bg-white border-2 border-teal-300'
                  }`}>
                    <GraduationCap size={20} className={edu.highlight ? 'text-white' : 'text-teal-600'} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-white rounded-2xl p-6 border shadow-soft ${
                    edu.highlight
                      ? 'border-teal-300 ring-2 ring-teal-100'
                      : 'border-slate-100'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="font-heading font-bold text-slate-900 text-lg">{edu.degree}</div>
                        <div className="text-slate-500 font-sans text-sm mt-0.5">{edu.institution}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${
                          edu.highlight
                            ? 'bg-teal-700 text-white'
                            : 'bg-teal-100 text-teal-700'
                        }`}>
                          {edu.year}
                        </span>
                        {edu.highlight && (
                          <span className="text-xs bg-amber-100 text-amber-700 font-heading font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star size={10} fill="currentColor" />
                            Highest Degree
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            tag="Achievements"
            title="Recognition & Milestones"
            subtitle="A track record built on clinical excellence and patient trust."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {doctorData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-teal-50/60 border border-teal-100 rounded-2xl p-5 hover:border-teal-300 transition-colors"
              >
                <div className="w-10 h-10 bg-teal-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-teal">
                  <Award size={18} className="text-white" />
                </div>
                <p className="text-slate-700 font-sans text-sm leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gradient-to-br from-teal-800 to-teal-600">
        <div className="container-custom">
          <SectionHeader
            tag="Areas of Expertise"
            title="Conditions We Treat"
            subtitle="Specialized management of the full spectrum of endocrine disorders."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {doctorData.expertise.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 hover:bg-white/15 transition-colors"
              >
                <CheckCircle2 size={16} className="text-teal-300 flex-shrink-0" />
                <span className="text-white font-heading font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 bg-white text-teal-800 px-8 py-4 rounded-full font-heading font-bold text-base hover:bg-teal-50 transition-all shadow-xl hover:-translate-y-0.5">
              <Briefcase size={18} />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
