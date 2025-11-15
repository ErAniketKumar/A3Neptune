import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
          <Shield className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-yellow-400">Policy</span>
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
                At{" "}
                <span className="text-yellow-400 font-semibold">A3Neptune</span>
                , we respect your privacy. We collect basic information such as
                your name, email, and message when you contact us. We also
                collect general website data like IP address, browser type, and
                pages visited to improve our site.
              </p>
            </div>

            {/* Information Usage */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use your information only to:
              </p>
              <ul className="space-y-3">
                {[
                  "Respond to your inquiries",
                  "Provide services",
                  "Improve our website",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                Data Sharing
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We do <span className="text-yellow-400 font-semibold">not</span>{" "}
                sell or share your personal data with any third party except
                trusted service tools (hosting, analytics, email).
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">
                Your Rights
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                You can contact us anytime to update or delete your information.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-yellow-400" />
                Privacy Concerns?
              </h2>
              <p className="text-gray-300 mb-4">
                For any privacy concerns, reach us at:
              </p>
              <a
                href="mailto:aniketshraff@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 text-xl font-semibold transition-colors"
              >
                aniketshraff@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
