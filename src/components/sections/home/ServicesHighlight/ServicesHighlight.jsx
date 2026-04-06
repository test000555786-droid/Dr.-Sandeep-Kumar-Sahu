import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity, Zap, Brain, Heart, Shield, TrendingDown, ArrowRight,
} from 'lucide-react';
import { servicesData } from '../../../../data/servicesData';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import { staggerContainer, fadeInUp } from '../../../../animations/variants';

const iconMap = { Activity, Zap, Brain, Heart, Shield, TrendingDown };

/* ── Curated Unsplash images per specialty ── */
const serviceImages = {
  diabetes:  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600',
  thyroid:   'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800&h=600',
  pituitary: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800&h=600',
  pcos:      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600',
  bone:      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800&h=600',
  obesity:   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=600',
};

/* ── Bottom-heavy gradient per specialty ── */
const gradients = {
  diabetes:  'from-teal-950 via-teal-900/75',
  thyroid:   'from-emerald-950 via-emerald-900/75',
  pituitary: 'from-cyan-950 via-cyan-900/75',
  pcos:      'from-rose-950 via-rose-900/75',
  bone:      'from-amber-950 via-amber-900/75',
  obesity:   'from-violet-950 via-violet-900/75',
};

/* ── Accent color per specialty ── */
const accents = {
  diabetes:  { glow: 'bg-teal-400',   bar: 'bg-teal-400',   dot: 'bg-teal-400',   icon: 'bg-teal-400/20 border-teal-300/40 text-teal-300'   },
  thyroid:   { glow: 'bg-emerald-400', bar: 'bg-emerald-400', dot: 'bg-emerald-400', icon: 'bg-emerald-400/20 border-emerald-300/40 text-emerald-300' },
  pituitary: { glow: 'bg-cyan-400',   bar: 'bg-cyan-400',   dot: 'bg-cyan-400',   icon: 'bg-cyan-400/20 border-cyan-300/40 text-cyan-300'   },
  pcos:      { glow: 'bg-rose-400',   bar: 'bg-rose-400',   dot: 'bg-rose-400',   icon: 'bg-rose-400/20 border-rose-300/40 text-rose-300'   },
  bone:      { glow: 'bg-amber-400',  bar: 'bg-amber-400',  dot: 'bg-amber-400',  icon: 'bg-amber-400/20 border-amber-300/40 text-amber-300'  },
  obesity:   { glow: 'bg-violet-400', bar: 'bg-violet-400', dot: 'bg-violet-400', icon: 'bg-violet-400/20 border-violet-300/40 text-violet-300' },
};

/* ─────────────────────────────────────────────
   ServiceCard — Full-bleed image + slide-up reveal
────────────────────────────────────────────── */
const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || Activity;
  const ac   = accents[service.id];
  const grad = gradients[service.id];
  const img  = serviceImages[service.id];

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{ height: '360px' }}
    >
      {/* ── Full-bleed photo ── */}
      <img
        src={img}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Permanent bottom-heavy gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${grad} to-transparent`} />

      {/* Hover: subtle dark veil */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

      {/*
        ═══════════════════════════════════════════
        LAYER 1 — Slide-up reveal panel
        Starts: top=100% (fully below card, hidden by overflow:hidden)
        Hover:  translateY(-100%) → slides up, filling above the footer
        A bottom padding equal to footer height (72px) creates space
        so the panel content sits above the pinned footer.
        ═══════════════════════════════════════════
      */}
      <div
        className="absolute left-0 right-0 z-[5] px-5 pt-5
                   transition-transform duration-500 ease-out
                   translate-y-0 group-hover:-translate-y-full"
        style={{ top: '100%', paddingBottom: '76px' }}
      >
        {/* Short description */}
        <p className="text-white/90 text-[11px] font-sans leading-relaxed mb-3">
          {service.shortDesc}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-1.5 mb-4">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-white/75 text-[11px] font-sans">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA pill */}
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-white text-[11px] font-heading font-semibold
                     border border-white/30 bg-white/10 backdrop-blur-sm
                     hover:bg-white/20 px-3 py-1.5 rounded-full
                     transition-all duration-200 group/link"
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
          <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/*
        ═══════════════════════════════════════════
        LAYER 2 — Pinned footer (always visible)
        Icon + Title fixed at card bottom — z-[10] so it stays
        on top of both the gradient and the slide panel.
        ═══════════════════════════════════════════
      */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] px-5 pb-4 pt-3">
        {/* Subtle extra gradient so footer text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${ac.icon}`}>
            <Icon size={18} />
          </div>
          <h3 className="font-heading font-bold text-white text-[15px] leading-snug">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Bottom accent bar (above footer) */}
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] z-[11] ${ac.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};


/* ─────────────────────────────────────────────
   Section
────────────────────────────────────────────── */
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
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
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
