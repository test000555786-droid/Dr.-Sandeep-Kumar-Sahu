import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../../../data/testimonialsData';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonialsData.length) % testimonialsData.length);
  const next = () => setActive((a) => (a + 1) % testimonialsData.length);

  const t = testimonialsData[active];

  return (
    <section className="section-padding bg-gradient-to-br from-teal-900 to-teal-700 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <SectionHeader
          tag="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real experiences from patients who have trusted Dr. Sahu with their health."
          light
        />

        <div className="max-w-4xl mx-auto">
          {/* Mini cards row */}
          <div className="hidden md:flex gap-4 mb-8 justify-center">
            {testimonialsData.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                  i === active
                    ? 'bg-white text-teal-800 border-white shadow-md scale-105'
                    : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/15'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                  i === active ? 'bg-teal-700 text-white' : 'bg-white/20 text-white'
                }`}>
                  {item.initials}
                </div>
                <span className="font-heading font-semibold text-sm">{item.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-teal-gradient flex items-center justify-center text-white font-display font-bold text-2xl shadow-teal">
                    {t.initials}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-slate-500 text-sm font-sans">{t.condition} · {t.location}</p>
                    </div>
                    <Quote size={28} className="text-teal-200 flex-shrink-0 ml-4" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 font-sans text-base md:text-lg leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
