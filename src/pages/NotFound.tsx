import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@components/PageContainer";

export const NotFound = () => {
  return (
    <PageContainer>
      <motion.div
        className="flex flex-col justify-center items-center px-6 min-h-screen text-center bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-7xl font-extrabold drop-shadow-md md:text-9xl text-error"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-xl font-semibold md:text-2xl text-text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Página no encontrada
        </motion.p>

        <motion.p
          className="mt-2 text-placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La ruta a la que intentas acceder no existe o ha sido movida.
        </motion.p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-2 font-bold rounded-lg transition-colors bg-link text-surface hover:bg-link-hover"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};
