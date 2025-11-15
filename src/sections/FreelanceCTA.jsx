import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin } from "lucide-react";
import Button from "../components/Button";
import { siteConfig } from "../config/site";

const FreelanceCTA = () => {
  return (
    <section
      id="freelance"
      className="py-32 bg-linear-to-b from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="bg-linear-to-br from-zinc-900 to-black border-2 border-yellow-400/30 rounded-3xl p-12 md:p-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-medium">
              Available for Hire
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hire Us for Freelance
            <br />
            <span className="text-yellow-400">Projects Worldwide</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We actively work on{" "}
            <span className="text-yellow-400 font-semibold">Upwork</span>,{" "}
            <span className="text-yellow-400 font-semibold">Fiverr</span>,{" "}
            <span className="text-yellow-400 font-semibold">LinkedIn</span>, and
            direct contract projects.
            <br />
            We deliver premium quality with fast communication and professional
            development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary" to="/get-quote" className="group">
              <Briefcase className="inline-block mr-2" size={20} />
              Get a Quote
            </Button>
            <Button variant="secondary" href={siteConfig.social.upwork}>
              Hire on Upwork
            </Button>
            <Button variant="secondary" href={siteConfig.social.linkedin}>
              <Linkedin className="inline-block mr-2" size={20} />
              Contact on LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceCTA;
