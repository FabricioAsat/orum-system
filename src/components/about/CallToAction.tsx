import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        ¿Listo para transformar tu idea en una solución real?
      </h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 font-bold rounded-full transition-colors duration-300 cursor-pointer md:text-lg text-surface bg-primary hover:bg-primary-hover"
      >
        <Link to="/contact">Consulta ya!</Link>
      </motion.button>
    </div>
  );
};
