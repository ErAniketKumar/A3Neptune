import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-32 bg-linear-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle subtitle="Pioneering Digital Excellence">
          About A3Neptune
        </SectionTitle>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12 md:p-16">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
              A3Neptune is a modern software consulting studio offering{" "}
              <span className="text-yellow-400 font-semibold">
                premium design
              </span>
              ,{" "}
              <span className="text-yellow-400 font-semibold">development</span>
              , and{" "}
              <span className="text-yellow-400 font-semibold">
                AI-powered digital solutions
              </span>{" "}
              for global startups, educators, creators, and businesses.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              We specialize in building{" "}
              <span className="text-white font-medium">scalable</span>,{" "}
              <span className="text-white font-medium">fast</span>, and{" "}
              <span className="text-white font-medium">beautiful</span> apps
              using cutting-edge technologies.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "25+", label: "Happy Clients" },
            { value: "5+", label: "Team Members" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
