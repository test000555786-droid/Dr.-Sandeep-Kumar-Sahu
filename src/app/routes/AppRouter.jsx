import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../../layouts/MainLayout';
import ScrollToTop from '../../components/layout/ScrollToTop/ScrollToTop';
import Loader from '../../components/common/Loader/Loader';

const Home = lazy(() => import('../../pages/Home/Home'));
const About = lazy(() => import('../../pages/About/About'));
const Services = lazy(() => import('../../pages/Services/Services'));
const Blogs = lazy(() => import('../../pages/Blogs/Blogs'));
const BlogDetails = lazy(() => import('../../pages/Blogs/BlogDetails'));
const PatientCorner = lazy(() => import('../../pages/PatientCorner/PatientCorner'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="/patient-corner" element={<PatientCorner />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </MainLayout>
    </>
  );
};

export default AppRouter;
