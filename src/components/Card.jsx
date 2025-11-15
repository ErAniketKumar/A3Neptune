import { motion } from "framer-motion";

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -8,
              borderColor: "rgb(250, 204, 21)",
              boxShadow: "0 20px 40px rgba(250, 204, 21, 0.1)",
            }
          : {}
      }
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
