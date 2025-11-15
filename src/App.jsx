import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import FreelanceCTA from "./sections/FreelanceCTA";
import Portfolio from "./sections/Portfolio";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

// Service Detail Pages
import FullStackDevelopment from "./pages/services/FullStackDevelopment";
import AIIntegration from "./pages/services/AIIntegration";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import BusinessPortfolio from "./pages/services/BusinessPortfolio";
import ECommerce from "./pages/services/ECommerce";
import LearningApps from "./pages/services/LearningApps";
import CollegeWebsites from "./pages/services/CollegeWebsites";
import LandingPages from "./pages/services/LandingPages";
import AdminDashboard from "./pages/services/AdminDashboard";
import APIDevelopment from "./pages/services/APIDevelopment";
import CloudDeployment from "./pages/services/CloudDeployment";
import UIUXDesign from "./pages/services/UIUXDesign";

// Other Pages
import GetQuote from "./pages/GetQuote";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <FreelanceCTA />
    <Portfolio />
    <Team />
    <Contact />
  </>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <HomePage />
              </main>
              <Footer />
            </>
          }
        />

        {/* Service Detail Pages */}
        <Route
          path="/services/full-stack-development"
          element={<FullStackDevelopment />}
        />
        <Route path="/services/ai-integration" element={<AIIntegration />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/services/business-portfolio"
          element={<BusinessPortfolio />}
        />
        <Route path="/services/ecommerce" element={<ECommerce />} />
        <Route path="/services/learning-apps" element={<LearningApps />} />
        <Route
          path="/services/college-websites"
          element={<CollegeWebsites />}
        />
        <Route path="/services/landing-pages" element={<LandingPages />} />
        <Route path="/services/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/services/api-development" element={<APIDevelopment />} />
        <Route
          path="/services/cloud-deployment"
          element={<CloudDeployment />}
        />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />

        {/* Get Quote Page */}
        <Route path="/get-quote" element={<GetQuote />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;
