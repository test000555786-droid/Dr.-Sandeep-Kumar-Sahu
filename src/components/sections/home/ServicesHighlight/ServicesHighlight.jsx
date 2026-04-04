import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity, Zap, Brain, Heart, Shield, TrendingDown, ArrowRight
} from 'lucide-react';
import { servicesData } from '../../../../data/servicesData';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import { staggerContainer, fadeInUp } from '../../../../animations/variants';

const iconMap = { Activity, Zap, Brain, Heart, Shield, TrendingDown };

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || Activity;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-teal transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 md:p-7">
        {/* Icon */}
        <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} className={service.iconColor} />
        </div>

        <h3 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 font-sans text-sm leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-slate-600 text-sm font-sans">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-teal-700 font-heading font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
        >
          Learn More
          <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bottom accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};

const ServicesHighlight = () => {
  return (
    <section className="section-padding bg-mesh">
      <div className="container-custom">
        <SectionHeader
          tag="Specializations"
          title="Expert Care Across All Endocrine Conditions"
          subtitle="Comprehensive diagnosis and treatment for hormonal, metabolic, and endocrine disorders using the latest medical evidence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/services" className="btn-primary text-base px-8 py-3.5">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
