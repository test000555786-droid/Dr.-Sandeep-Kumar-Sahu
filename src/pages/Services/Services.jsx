import { motion } from 'framer-motion';
import { Activity, Zap, Brain, Heart, Shield, TrendingDown, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pageTransition, staggerContainer, fadeInUp, fadeInLeft } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { doctorData } from '../../data/doctorData';

const iconMap = { Activity, Zap, Brain, Heart, Shield, TrendingDown };

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || Activity;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-3xl border border-slate-100 shadow-card overflow-hidden"
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
        {/* Visual Panel */}
        <div className={`bg-gradient-to-br ${service.color} p-10 flex flex-col justify-between ${!isEven ? '[direction:ltr]' : ''}`}>
          <div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Icon size={26} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
              {service.title}
            </h3>
            <p className="text-white/80 font-sans text-base leading-relaxed">
              {service.description.trim()}
            </p>
          </div>
          <a
            href={`tel:${doctorData.phone}`}
            className="mt-8 inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-white/30 transition-colors w-fit"
          >
            <Phone size={14} />
            Consult for this condition
          </a>
        </div>

        {/* Features Panel */}
        <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? '[direction:ltr]' : ''}`}>
          <h4 className="font-heading font-bold text-slate-900 text-lg mb-6">
            What We Offer
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${service.bgColor}`}>
                  <CheckCircle2 size={13} className={service.iconColor} />
                </div>
                <span className="text-slate-700 font-sans text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Services | Dr. Sandeep Kumar Sahu — Endocrinologist Cuttack"
        description="Expert treatment for Diabetes, Thyroid disorders, PCOS, Pituitary disorders, Osteoporosis, and Obesity. Comprehensive endocrine care by Dr. Sandeep Kumar Sahu, DM Endocrinologist, Cuttack."
        canonical="/services"
      />

      <PageHero
        title="Our Services"
        subtitle="Comprehensive endocrine care covering the full spectrum of hormonal and metabolic disorders."
        breadcrumb={[{ label: 'Services' }]}
        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Service cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            tag="Specializations"
            title="Conditions We Specialize In"
            subtitle="From common conditions like diabetes and thyroid disease to rare hormonal disorders — expert care under one roof."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {servicesData.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-mesh">
        <div className="container-custom">
          <SectionHeader
            tag="Why Choose Us"
            title="The Dr. Sahu Difference"
            subtitle="What sets our practice apart from general physicians and other specialists."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '🎓',
                title: 'DM-Qualified Specialist',
                desc: 'DM (Endocrinology) is the highest qualification in the field — equivalent to a super-specialization fellowship.',
              },
              {
                icon: '🔬',
                title: 'Evidence-Based Medicine',
                desc: 'All treatment decisions are grounded in the latest international clinical guidelines and research.',
              },
              {
                icon: '👤',
                title: 'Personalized Care Plans',
                desc: 'Every patient receives a customized management plan tailored to their specific condition and lifestyle.',
              },
              {
                icon: '🏥',
                title: 'SCB Medical College Alumni',
                desc: 'Trained at one of India\'s premier medical institutions with decades of academic excellence.',
              },
              {
                icon: '📱',
                title: 'Accessible & Responsive',
                desc: 'Easy appointment booking and prompt responses to patient queries and follow-up concerns.',
              },
              {
                icon: '❤️',
                title: 'Compassionate Approach',
                desc: 'Taking the time to explain diagnoses, answer questions, and support patients throughout their journey.',
              },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft hover:shadow-teal hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 font-sans text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-700">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Have a question about your condition?
            </h2>
            <p className="text-teal-100 font-sans text-lg mb-8 max-w-xl mx-auto">
              Book a consultation with Dr. Sahu for accurate diagnosis and a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${doctorData.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-teal-800 px-8 py-4 rounded-full font-heading font-bold text-base hover:bg-teal-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={18} />
                {doctorData.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-heading font-semibold text-base hover:bg-white/10 transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
