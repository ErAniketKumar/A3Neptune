import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  to,
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 inline-block";

  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(255,214,0,0.5)] hover:scale-105",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white hover:text-yellow-400",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // React Router Link for internal navigation
  if (to) {
    return (
      <Link to={to}>
        <motion.div
          className={buttonClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
