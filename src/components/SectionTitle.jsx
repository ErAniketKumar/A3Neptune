import { motion } from "framer-motion";

const SectionTitle = ({ children, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.h2
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
