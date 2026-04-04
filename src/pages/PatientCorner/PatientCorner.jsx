import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, FileText, Download, Phone, BookOpen, AlertCircle } from 'lucide-react';
import { pageTransition, staggerContainer, fadeInUp } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import { doctorData } from '../../data/doctorData';

const faqs = [
  {
    q: 'What is an Endocrinologist and when should I see one?',
    a: 'An Endocrinologist is a doctor specialized in hormones and the endocrine system. You should see one if you have diabetes (especially poorly controlled), thyroid problems, PCOS, pituitary or adrenal disorders, osteoporosis, or unexplained weight changes.',
  },
  {
    q: 'What is DM (Endocrinology) and why does it matter?',
    a: 'DM (Doctorate of Medicine) in Endocrinology is the highest specialist degree in the field in India. It requires 3 years of additional training after MD, covering all aspects of endocrine disorders. Dr. Sahu is one of the few DM-qualified Endocrinologists in Odisha.',
  },
  {
    q: 'How do I prepare for my first endocrinology appointment?',
    a: 'Bring all previous lab reports and imaging (especially blood glucose, HbA1c, thyroid function tests, hormonal panels). List all current medications with dosages. Note down your symptoms with their duration. Bring any referral letters from other doctors.',
  },
  {
    q: 'What investigations are done for diabetes management?',
    a: 'Common tests include Fasting & Post-meal blood glucose, HbA1c (3-monthly), lipid profile, kidney function (creatinine, urine microalbumin), liver function, thyroid function, and periodic eye examination. Dr. Sahu will advise the appropriate tests based on your situation.',
  },
  {
    q: 'Can thyroid disorders be cured completely?',
    a: 'Hypothyroidism (underactive thyroid) is typically managed lifelong with thyroid hormone replacement. Hyperthyroidism can sometimes be cured with radioiodine therapy or surgery. Autoimmune thyroid conditions like Hashimoto\'s require ongoing management. Dr. Sahu will explain the specific outlook for your condition.',
  },
  {
    q: 'What is the treatment approach for PCOS?',
    a: 'PCOS treatment is individualized based on symptoms. It typically involves lifestyle modification (diet and exercise), medications to regulate periods (like metformin or oral contraceptives), and treatment of specific symptoms like hirsutism or acne. Fertility treatments are available if needed.',
  },
  {
    q: 'Is insulin therapy always needed for Type 2 Diabetes?',
    a: 'Not always. Many patients with Type 2 Diabetes can be managed with oral/injectable non-insulin medications and lifestyle changes. However, insulin may be needed when blood sugars are very high, during illness or surgery, or when other medications are insufficient.',
  },
  {
    q: 'What dietary advice is given for Diabetes?',
    a: 'General advice includes limiting refined carbohydrates and sugars, increasing fiber intake (vegetables, whole grains), controlling portion sizes, regular meal timing, limiting processed foods, and staying well-hydrated. A detailed, personalized diet plan will be provided at consultation.',
  },
  {
    q: 'How often should I follow up after starting treatment?',
    a: 'Initially, follow-up is every 4-6 weeks to assess response to treatment and adjust medications. Once stable, follow-up is typically every 3 months for diabetes (with HbA1c) and every 6 months for thyroid disorders. Dr. Sahu will specify the schedule for your condition.',
  },
  {
    q: 'Does the clinic offer consultation for children with hormonal problems?',
    a: 'Yes. Dr. Sahu manages pediatric endocrine conditions including Type 1 Diabetes in children, growth hormone deficiency, delayed puberty, and thyroid disorders in children and adolescents.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-soft">
    <button
      className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-teal-50/50 transition-colors"
      onClick={onToggle}
    >
      <span className="font-heading font-semibold text-slate-800 text-base pr-4">{faq.q}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-teal-700 text-white' : 'bg-teal-100 text-teal-700'
        }`}
      >
        <ChevronDown size={16} />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-100">
            <p className="text-slate-600 font-sans text-base leading-relaxed pt-4">{faq.a}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const PatientCorner = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Patient Corner | Dr. Sandeep Kumar Sahu — FAQs & Resources"
        description="Patient resources, FAQs about Endocrinology, diabetes management tips, and health information from Dr. Sandeep Kumar Sahu, DM Endocrinologist, Cuttack, Odisha."
        canonical="/patient-corner"
      />

      <PageHero
        title="Patient Corner"
        subtitle="Everything you need to prepare for your visit, understand your condition, and get the most from your care."
        breadcrumb={[{ label: 'Patient Corner' }]}
      />

      {/* Quick Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              {
                icon: Phone,
                title: 'Book Appointment',
                desc: 'Call us to schedule your consultation',
                action: `tel:${doctorData.phone}`,
                actionLabel: doctorData.phoneDisplay,
                color: 'bg-teal-700',
              },
              {
                icon: BookOpen,
                title: 'Health Articles',
                desc: 'Evidence-based health content',
                action: '/blogs',
                actionLabel: 'Read Articles',
                color: 'bg-emerald-700',
              },
              {
                icon: AlertCircle,
                title: 'Preparation Guide',
                desc: 'How to prepare for your visit',
                action: '#preparation',
                actionLabel: 'View Guide',
                color: 'bg-cyan-700',
              },
              {
                icon: FileText,
                title: 'Common FAQs',
                desc: 'Answers to frequent questions',
                action: '#faqs',
                actionLabel: 'View FAQs',
                color: 'bg-violet-700',
              },
            ].map(({ icon: Icon, title, desc, action, actionLabel, color }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-soft hover:shadow-teal hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base mb-1">{title}</h3>
                <p className="text-slate-500 font-sans text-sm mb-4">{desc}</p>
                <a
                  href={action}
                  className="text-teal-700 font-heading font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {actionLabel} →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preparation Guide */}
      <section id="preparation" className="section-padding bg-mesh">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeader
            tag="Before Your Visit"
            title="How to Prepare for Your Appointment"
            subtitle="Follow these steps to make the most of your consultation with Dr. Sahu."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              {
                num: '01',
                title: 'Gather Your Medical Records',
                items: ['Previous lab reports (blood glucose, thyroid, hormones)', 'Any imaging reports (ultrasound, MRI, CT)', 'Referral letters from other doctors', 'Discharge summaries if hospitalized'],
              },
              {
                num: '02',
                title: 'List All Current Medications',
                items: ['Name and dosage of each medicine', 'Vitamins and supplements', 'Duration of current treatment', 'Any known drug allergies'],
              },
              {
                num: '03',
                title: 'Note Your Symptoms',
                items: ['When did symptoms start?', 'What makes them better or worse?', 'Any recent weight changes?', 'Family history of hormonal conditions'],
              },
              {
                num: '04',
                title: 'Fasting Requirements',
                items: ['Blood glucose tests may require 8–10 hours fasting', 'Some hormone tests have specific timing requirements', 'Drink water normally unless instructed otherwise', 'Take regular medications unless told to stop'],
              },
            ].map(({ num, title, items }) => (
              <motion.div
                key={num}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-sm">{num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 font-sans text-sm">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeader
            tag="FAQs"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from our patients."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FAQItem
                  faq={faq}
                  isOpen={openFAQ === i}
                  onToggle={() => toggleFAQ(i)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 bg-teal-50 rounded-2xl border border-teal-100 p-6 text-center"
          >
            <p className="text-slate-700 font-sans mb-4">
              Have a question not answered here? Call us directly or book a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${doctorData.phone}`} className="btn-primary">
                <Phone size={16} />
                {doctorData.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-outline">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PatientCorner;
