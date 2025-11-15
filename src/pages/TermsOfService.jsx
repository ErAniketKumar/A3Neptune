import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="container mx-auto px-6 pt-24"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <FileText className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-yellow-400">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Last Updated: 15 November 2025
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed">
                By using the{" "}
                <span className="text-yellow-400 font-semibold">A3Neptune</span>{" "}
                website, you agree to the following:
              </p>
            </div>

            {/* Terms List */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Terms & Conditions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Responsible Use",
                    description:
                      "Use the site responsibly and do not misuse or copy content.",
                  },
                  {
                    title: "Service Agreement",
                    description:
                      "When you contact us for services, project timelines and pricing will be discussed clearly.",
                  },
                  {
                    title: "Payment Terms",
                    description:
                      "Payments must be made as agreed. Refunds are not available once work has started.",
                  },
                  {
                    title: "Project Ownership",
                    description:
                      "Final project files/code belong to you after full payment.",
                  },
                  {
                    title: "Liability",
                    description:
                      "We are not responsible for issues caused by hosting providers, third-party services, or modifications made after delivery.",
                  },
                ].map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">
                      {index + 1}. {term.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {term.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-yellow-400" />
                Questions About Terms?
              </h2>
              <p className="text-gray-300 mb-4">
                For any questions, contact us at:
              </p>
              <a
                href="mailto:support@a3neptune.kalawatiputra.com"
                className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition-colors"
              >
                support@a3neptune.kalawatiputra.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
