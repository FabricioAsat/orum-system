import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logicIMG from "@assets/logic.jpg";

export const LogicFamily = () => {
  return (
    <section className="mx-auto my-12 max-w-4xl md:my-24 lg:grid-cols-3">
      <motion.div
        className="overflow-hidden relative w-full lg:rounded-3xl"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.01 },
        }}
      >
        {/* Fondo con imagen animada */}
        <motion.aside
          variants={{
            rest: { filter: "grayscale(1)", scale: 1 },
            hover: { filter: "grayscale(0)", scale: 1.05 },
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-center bg-cover opacity-80"
          style={{ backgroundImage: `url(${logicIMG})` }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-background/70" />

        {/* Contenido principal */}
        <div className="grid relative z-10 grid-cols-1 gap-10 items-center px-6 py-16 w-full md:grid-cols-2 md:px-20 md:py-24">
          <div className="flex flex-col items-start max-w-xl text-white">
            <h1 className="text-3xl font-extrabold drop-shadow-md text-link md:text-4xl">
              Familia Logic
            </h1>
            <p className="mt-4 text-base font-medium md:text-lg text-text-muted">
              Tecnología modular para un control inteligente.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="px-4 py-2 mt-8 font-bold rounded-xl transition duration-200 cursor-pointer text-surface bg-link hover:bg-link-hover" to={"/logic-family"}>Ver familia</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
