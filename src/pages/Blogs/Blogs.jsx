import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { pageTransition, staggerContainer, fadeInUp } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import { blogData } from '../../data/blogData';

const categoryColors = {
  'Diabetes': 'bg-teal-100 text-teal-700',
  'Thyroid': 'bg-emerald-100 text-emerald-700',
  'Hormonal Health': 'bg-rose-100 text-rose-700',
  'Bone Health': 'bg-amber-100 text-amber-700',
  'Metabolic Health': 'bg-violet-100 text-violet-700',
  'Nutrition & Hormones': 'bg-orange-100 text-orange-700',
};

const BlogCard = ({ post, featured = false }) => (
  <motion.article
    variants={fadeInUp}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    className={`bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden group ${
      featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
    }`}
  >
    {/* Image placeholder */}
    <div className={`bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center ${
      featured ? 'min-h-64' : 'h-44'
    }`}>
      <div className="text-center text-white p-6">
        <div className="text-5xl mb-3">
          {post.category === 'Diabetes' ? '💉' :
           post.category === 'Thyroid' ? '🦋' :
           post.category === 'Hormonal Health' ? '⚗️' :
           post.category === 'Bone Health' ? '🦴' :
           post.category === 'Metabolic Health' ? '⚖️' : '🌿'}
        </div>
        <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full bg-white/20 border border-white/30`}>
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-6 md:p-7">
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className={`text-xs font-heading font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-teal-100 text-teal-700'}`}>
          {post.category}
        </span>
        <span className="flex items-center gap-1 text-slate-400 text-xs font-sans">
          <Clock size={12} />
          {post.readTime}
        </span>
        <span className="text-slate-400 text-xs font-sans">{post.date}</span>
      </div>

      <h2 className={`font-heading font-bold text-slate-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors ${
        featured ? 'text-2xl' : 'text-lg'
      }`}>
        {post.title}
      </h2>

      <p className="text-slate-500 font-sans text-sm leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="flex items-center gap-1 text-slate-400 text-xs font-sans">
            <Tag size={10} />
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/blogs/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-teal-700 font-heading font-semibold text-sm hover:gap-3 transition-all group/link"
      >
        Read Full Article
        <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.article>
);

const Blogs = () => {
  const [featured, ...rest] = blogData;

  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Health Blog | Dr. Sandeep Kumar Sahu — Endocrinologist"
        description="Expert health insights on Diabetes, Thyroid disorders, PCOS, Hormonal health, Osteoporosis, and Metabolic syndrome from Dr. Sandeep Kumar Sahu, DM Endocrinologist, Cuttack."
        canonical="/blogs"
      />

      <PageHero
        title="Health & Wellness Blog"
        subtitle="Expert insights on endocrine health, diabetes management, thyroid disorders, and more — written for patients in plain language."
        breadcrumb={[{ label: 'Blogs' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            tag="Health Education"
            title="Learn From Our Expert"
            subtitle="Evidence-based health information to help you understand and manage your condition better."
          />

          <motion.div
            variants={staggerContainer}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogData.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={false} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-mesh">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-teal-100">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="font-display font-bold text-slate-900 text-2xl md:text-3xl mb-3">
                Stay Informed About Your Health
              </h2>
              <p className="text-slate-500 font-sans leading-relaxed mb-6">
                Have questions about a health topic? Book a consultation with Dr. Sahu for 
                personalized, expert guidance.
              </p>
              <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                Book a Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blogs;
