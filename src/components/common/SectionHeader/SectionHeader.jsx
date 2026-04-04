import { motion } from 'framer-motion';
import { fadeInUp } from '../../../animations/variants';

const SectionHeader = ({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {tag && (
        <span className={`section-tag ${light ? 'text-teal-300' : 'text-teal-700'}`}>
          <span className="w-6 h-px bg-current inline-block"></span>
          {tag}
          <span className="w-6 h-px bg-current inline-block"></span>
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed font-sans ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-teal-100' : 'text-slate-500'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
