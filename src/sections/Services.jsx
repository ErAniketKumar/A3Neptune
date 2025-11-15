import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { siteConfig } from "../config/site";

const Services = () => {
  // Map service titles to their URLs
  const serviceRoutes = {
    "Full-Stack Website Development": "/services/full-stack-development",
    "AI-Integrated Web & App Solutions": "/services/ai-integration",
    "Mobile App Development": "/services/mobile-app-development",
    "Business Portfolio Websites": "/services/business-portfolio",
    "E-Commerce Solutions": "/services/ecommerce",
    "Learning Apps for Educators": "/services/learning-apps",
    "College & School Websites": "/services/college-websites",
    "Landing Pages for Businesses": "/services/landing-pages",
    "Custom Dashboard & Admin Panel": "/services/admin-dashboard",
    "API Development & Integrations": "/services/api-development",
    "Cloud Deployment & DevOps": "/services/cloud-deployment",
    "UI/UX Design": "/services/ui-ux-design",
  };

  return (
    <section id="services" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle subtitle="Comprehensive solutions tailored to your business needs">
          Our Services
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            const serviceRoute = serviceRoutes[service.title];

            return (
              <Card key={index}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-yellow-400" size={32} />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <Link to={serviceRoute}>
                  <motion.div
                    className="mt-6 flex items-center text-yellow-400 font-medium cursor-pointer hover:text-yellow-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <Icons.ArrowRight className="ml-2" size={20} />
                  </motion.div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
