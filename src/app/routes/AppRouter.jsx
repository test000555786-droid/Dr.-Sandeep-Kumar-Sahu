import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import ScrollToTop from '../../components/layout/ScrollToTop/ScrollToTop';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Blogs from '../../pages/Blogs/Blogs';
import BlogDetails from '../../pages/Blogs/BlogDetails';
import PatientCorner from '../../pages/PatientCorner/PatientCorner';
import Contact from '../../pages/Contact/Contact';
import NotFound from '../../pages/NotFound/NotFound';

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/patient-corner" element={<PatientCorner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRouter;
