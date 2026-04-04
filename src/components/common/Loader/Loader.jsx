import { motion } from 'framer-motion';

const Loader = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated stethoscope icon */}
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-teal-100"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-teal-600 rounded-full" />
        </div>
      </div>
      <div className="text-center">
        <p className="font-display font-semibold text-slate-800 text-base">Dr. Sandeep Kumar Sahu</p>
        <p className="text-teal-600 text-sm font-heading mt-0.5">Endocrinologist · Cuttack</p>
      </div>
    </motion.div>
  </div>
);

export default Loader;
