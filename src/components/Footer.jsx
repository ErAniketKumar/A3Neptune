import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "../config/site";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-gray-400 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              © {new Date().getFullYear()} A3Neptune – All Rights Reserved
            </div>
            <div className="text-sm mt-2">
              A brand of{" "}
              <a
                href="https://www.kalawatiputra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
              >
                KalawatiPutra
              </a>
            </div>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-yellow-400 transition-colors"
            >
              Terms
            </Link>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
