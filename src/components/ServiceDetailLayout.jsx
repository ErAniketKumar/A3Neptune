import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ServiceDetailLayout = ({ title, subtitle, icon: Icon, content }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link to="/#services">
            <motion.button
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              Back to Services
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-black to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-yellow-400/10 rounded-2xl mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-yellow-400" size={48} />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-yellow-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/get-quote">
              <Button variant="primary">Get Started with This Service</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {section.title}
              </h2>
              <div className="text-xl text-gray-300 leading-relaxed space-y-4">
                {section.paragraphs.map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-6 space-y-3">
                  {section.list.map((item, lIndex) => (
                    <li
                      key={lIndex}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <Check
                        className="text-yellow-400 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Why Choose A3Neptune */}
          <motion.div
            className="bg-linear-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-3xl p-12 mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose A3Neptune?
            </h2>
            <ul className="space-y-4">
              {content.whyChooseUs.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check
                    className="text-yellow-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and bring your vision to life
            </p>
            <Link to="/get-quote">
              <Button variant="primary" className="mr-4">
                Get a Quote
              </Button>
            </Link>
            <Link to="/#services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
