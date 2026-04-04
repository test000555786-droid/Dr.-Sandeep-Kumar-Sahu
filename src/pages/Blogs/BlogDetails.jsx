import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, Tag, ArrowRight } from 'lucide-react';
import { pageTransition, fadeInUp } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import PageHero from '../../components/common/PageHero/PageHero';
import { blogData } from '../../data/blogData';
import { doctorData } from '../../data/doctorData';

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const related = blogData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <motion.div {...pageTransition}>
      <SEO
        title={`${post.title} | Dr. Sandeep Kumar Sahu`}
        description={post.excerpt}
        canonical={`/blogs/${post.slug}`}
      />

      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumb={[
          { label: 'Blogs', path: '/blogs' },
          { label: post.category },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 font-sans text-sm">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-sans text-sm">
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2 text-teal-600 font-heading font-semibold text-sm">
                  ✍️ {post.author}
                </div>
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-slate-600 prose-p:font-sans prose-p:leading-relaxed
                  prose-li:text-slate-600 prose-li:font-sans
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-ul:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-slate-500 text-sm font-heading font-semibold">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 bg-teal-50 text-teal-700 border border-teal-100 text-xs font-heading font-semibold px-3 py-1.5 rounded-full"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back link */}
              <div className="mt-8">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-teal-700 font-heading font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft size={16} />
                  Back to All Articles
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Doctor Card */}
              <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-2xl p-6 text-white shadow-teal-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/25 flex-shrink-0">
                    <span className="font-display font-bold text-2xl">S</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">Dr. Sandeep Kumar Sahu</div>
                    <div className="text-teal-200 text-xs font-sans">DM Endocrinology, Cuttack</div>
                  </div>
                </div>
                <p className="text-teal-100/85 font-sans text-sm leading-relaxed mb-5">
                  Expert endocrine care with over 10 years of specialized experience. 
                  Consult for personalized diagnosis and treatment.
                </p>
                <a
                  href={`tel:${doctorData.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-white text-teal-800 py-3 rounded-full font-heading font-bold text-sm hover:bg-teal-50 transition-colors"
                >
                  Book Consultation
                </a>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
                <h3 className="font-heading font-bold text-slate-900 text-base mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blogs/${rel.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-10 h-10 flex-shrink-0 bg-teal-100 rounded-xl flex items-center justify-center text-lg">
                        {rel.category === 'Diabetes' ? '💉' :
                         rel.category === 'Thyroid' ? '🦋' :
                         rel.category === 'Hormonal Health' ? '⚗️' : '🌿'}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-slate-800 text-sm leading-snug group-hover:text-teal-700 transition-colors line-clamp-2">
                          {rel.title}
                        </div>
                        <div className="text-slate-400 text-xs font-sans mt-0.5">{rel.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* OPD Hours */}
              <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6">
                <h3 className="font-heading font-bold text-teal-900 text-base mb-4">OPD Hours</h3>
                {doctorData.clinicHours.map((h, i) => (
                  <div key={i} className="flex justify-between items-start py-2 border-b border-teal-100 last:border-0">
                    <div>
                      <div className="text-slate-700 font-heading font-semibold text-sm">{h.type || h.day}</div>
                      <div className="text-slate-500 font-sans text-xs">{h.day !== h.type ? h.day : ''}</div>
                    </div>
                    <div className="text-teal-700 font-heading font-semibold text-sm">{h.time}</div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogDetails;
