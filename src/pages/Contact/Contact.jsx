import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import { doctorData } from '../../data/doctorData';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Contact Dr. Sandeep Kumar Sahu | Book Appointment, Cuttack"
        description="Contact Dr. Sandeep Kumar Sahu at Sai Shree Health Care, Mangalabag, Cuttack. Call 7008512773. Book an appointment for Diabetes, Thyroid, and Hormonal disorders."
        canonical="/contact"
      />

      <PageHero
        title="Contact & Appointment"
        subtitle="Reach us for appointments, directions, or any questions about your care."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Quick Contact Bar */}
      <section className="bg-teal-50 border-b border-teal-100">
        <div className="container-custom py-6">
          <motion.div
            variants={staggerContainer}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Phone,
                label: 'Call Us',
                value: doctorData.phoneDisplay,
                href: `tel:${doctorData.phone}`,
                color: 'text-teal-700',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Sai Shree Health Care, Mangalabag, Cuttack',
                href: doctorData.mapUrl,
                color: 'text-teal-700',
              },
              {
                icon: Clock,
                label: 'OPD Timing',
                value: 'Mon–Sat: 10–2 PM & 5–8 PM',
                href: null,
                color: 'text-teal-700',
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-soft border border-teal-100"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-teal-700" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-400 text-xs font-heading uppercase tracking-wide">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`font-heading font-semibold text-sm ${color} hover:underline truncate block`}
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-heading font-semibold text-sm text-slate-700 truncate">{value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial={false}
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-display font-bold text-slate-900 text-3xl mb-2">
                Book an Appointment
              </h2>
              <p className="text-slate-500 font-sans mb-8">
                Fill in your details and we will get back to you to confirm your appointment.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-teal-700" />
                  </div>
                  <h3 className="font-heading font-bold text-teal-900 text-xl mb-2">
                    Thank you! We'll be in touch.
                  </h3>
                  <p className="text-teal-700 font-sans text-sm">
                    Your request has been received. Our team will call you shortly to confirm your appointment.
                    For immediate assistance, call {doctorData.phoneDisplay}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-slate-800 placeholder:text-slate-400 text-sm outline-none transition-all
                          focus:border-teal-500 focus:ring-2 focus:ring-teal-100
                          ${errors.name ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-slate-50 hover:border-teal-300'}`}
                      />
                      {errors.name && <p className="text-rose-500 text-xs mt-1 font-sans">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian number' },
                        })}
                        type="tel"
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-slate-800 placeholder:text-slate-400 text-sm outline-none transition-all
                          focus:border-teal-500 focus:ring-2 focus:ring-teal-100
                          ${errors.phone ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-slate-50 hover:border-teal-300'}`}
                      />
                      {errors.phone && <p className="text-rose-500 text-xs mt-1 font-sans">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                      Condition / Reason for Visit <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register('condition', { required: 'Please select a condition' })}
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-slate-800 text-sm outline-none transition-all
                        focus:border-teal-500 focus:ring-2 focus:ring-teal-100
                        ${errors.condition ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-slate-50 hover:border-teal-300'}`}
                    >
                      <option value="">Select a condition...</option>
                      <option>Diabetes (Type 1 / Type 2)</option>
                      <option>Thyroid Disorder</option>
                      <option>PCOS / Hormonal Imbalance</option>
                      <option>Pituitary / Adrenal Disorder</option>
                      <option>Osteoporosis / Bone Disorder</option>
                      <option>Obesity / Metabolic Syndrome</option>
                      <option>Growth Hormone Issue</option>
                      <option>Other / General Consultation</option>
                    </select>
                    {errors.condition && <p className="text-rose-500 text-xs mt-1 font-sans">{errors.condition.message}</p>}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                      Preferred Appointment Time
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Morning (10AM–12PM)', 'Afternoon (12–2PM)', 'Evening (5–7PM)', 'Evening (7–8PM)'].map((slot) => (
                        <label key={slot} className="cursor-pointer">
                          <input
                            {...register('slot')}
                            type="radio"
                            value={slot}
                            className="sr-only peer"
                          />
                          <div className="text-center py-2.5 px-2 rounded-xl border border-slate-200 text-slate-500 text-xs font-heading font-medium
                            peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-700
                            hover:border-teal-300 transition-all cursor-pointer">
                            {slot}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-slate-700 mb-1.5">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Any additional details about your condition or specific concerns..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-sans text-slate-800 placeholder:text-slate-400 text-sm outline-none resize-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-100 hover:border-teal-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-full font-heading font-bold text-base transition-all duration-300 shadow-teal hover:shadow-teal-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Request Appointment
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs font-sans text-center">
                    We'll call you within 24 hours to confirm your appointment.
                    For urgent needs, call directly: {doctorData.phoneDisplay}
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={fadeInRight}
              initial={false}
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Clinic Info */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-2xl p-7 text-white shadow-teal-lg">
                <h3 className="font-heading font-bold text-white text-xl mb-6">Clinic Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-teal-200" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white text-sm mb-0.5">Sai Shree Health Care</div>
                      <div className="text-teal-100/80 font-sans text-sm leading-relaxed">
                        Near Shreema Hospital,<br />
                        Ring Road, Mangalabag,<br />
                        Cuttack – 753001, Odisha
                      </div>
                      <a
                        href={doctorData.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200 text-xs font-heading font-semibold mt-2 transition-colors"
                      >
                        <ExternalLink size={11} />
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-teal-200" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white text-sm mb-0.5">Phone</div>
                      <a href={`tel:${doctorData.phone}`} className="text-teal-200 hover:text-white font-sans text-sm transition-colors">
                        {doctorData.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPD Hours */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-teal-700" />
                  OPD Timings
                </h3>
                <div className="space-y-3">
                  {doctorData.clinicHours.map((h, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 px-4 rounded-xl ${
                      i === 2 ? 'bg-slate-50 text-slate-400' : 'bg-teal-50 border border-teal-100'
                    }`}>
                      <div>
                        {h.type && <div className="font-heading font-semibold text-slate-700 text-sm">{h.type}</div>}
                        <div className="text-slate-500 font-sans text-xs">{h.day}</div>
                      </div>
                      <div className={`font-heading font-bold text-sm ${i === 2 ? 'text-slate-400' : 'text-teal-700'}`}>
                        {h.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency note */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="text-amber-500 mt-0.5">⚠️</div>
                  <div>
                    <div className="font-heading font-semibold text-amber-800 text-sm mb-1">For Urgent Care</div>
                    <p className="text-amber-700 font-sans text-sm leading-relaxed">
                      If you're experiencing a diabetic emergency (very high/low blood sugar), 
                      please call emergency services or visit the nearest hospital immediately.
                    </p>
                    <a
                      href={`tel:${doctorData.phone}`}
                      className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full font-heading font-semibold text-xs mt-3 hover:bg-amber-700 transition-colors"
                    >
                      <Phone size={12} />
                      Call Dr. Sahu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-100">
        <div className="container-custom py-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="font-heading font-bold text-slate-900">Find Us</h3>
                <p className="text-slate-500 font-sans text-sm">Sai Shree Health Care, Mangalabag, Cuttack</p>
              </div>
              <a
                href={doctorData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full font-heading font-semibold text-sm hover:bg-teal-800 transition-colors"
              >
                <ExternalLink size={14} />
                Open in Maps
              </a>
            </div>
            <div className="relative h-72 md:h-96 bg-teal-50 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0!2d85.8314!3d20.4625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzQ1LjAiTiA4NcKwNDknNTMuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Shree Health Care Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
