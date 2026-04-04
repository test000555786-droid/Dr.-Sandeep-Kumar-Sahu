import { motion } from 'framer-motion';
import { pageTransition } from '../../animations/variants';
import SEO from '../../components/common/SEO/SEO';
import Hero from '../../components/sections/home/Hero/Hero';
import AboutPreview from '../../components/sections/home/AboutPreview/AboutPreview';
import ServicesHighlight from '../../components/sections/home/ServicesHighlight/ServicesHighlight';
import Testimonials from '../../components/sections/home/Testimonials/Testimonials';
import CTA from '../../components/sections/home/CTA/CTA';

const Home = () => {
  return (
    <motion.div {...pageTransition}>
      <SEO
        title="Dr. Sandeep Kumar Sahu | Best Endocrinologist in Cuttack, Odisha"
        description="Dr. Sandeep Kumar Sahu — DM Endocrinologist in Cuttack. Expert in Diabetes, Thyroid, PCOS, Hormonal Disorders. MBBS, MD, DM from SCB Medical College. Call 7008512773."
        canonical="/"
      />
      <Hero />
      <AboutPreview />
      <ServicesHighlight />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
