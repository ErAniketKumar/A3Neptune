import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { siteConfig } from "../config/site";

const Team = () => {
  return (
    <section id="team" className="py-32 bg-linear-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle subtitle="Meet the talented individuals behind A3Neptune">
          Our Team
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {siteConfig.team.map((member, index) => (
            <Card key={index} className="text-center group">
              <motion.div
                className="relative mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl font-bold text-black">
                  {member.name.charAt(0)}
                </div>

                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-yellow-400/30 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {member.name}
              </h3>

              <div className="flex items-center justify-center gap-4">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-400/10 rounded-lg hover:bg-yellow-400/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="text-yellow-400" size={20} />
                </motion.a>
                <motion.a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-400/10 rounded-lg hover:bg-yellow-400/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="text-yellow-400" size={20} />
                </motion.a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
