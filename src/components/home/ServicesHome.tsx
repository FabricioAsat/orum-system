import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { SoftwareSVG } from "@components/svg-tsx/SoftwreSVG";
import { ConsultSVG } from "@components/svg-tsx/ConsultSVG";
import { ElectronicSVG } from "@components/svg-tsx/ElectronicSVG";
import { Link } from "react-router-dom";

const data = {
  Software: {
    title: "Software a medida",
    descriptions: [
      "Sistemas adaptados a tu flujo de trabajo.",
      "Soluciones escalables y seguras.",
      "Adaptados a transporte, PyMEs y entes públicos.",
    ],
    icon: <SoftwareSVG className="w-6" />,
    to:"services/software"
  },
  Electrónica: {
    title: "Desarrollo de placas electrónicas",
    descriptions: [
      "Placas electrónicas y controladores para industria.",
      "PLCs dedicados para control y adquisición de datos.",
      "Sistemas SCADA a medida.",
    ],
    icon: <ElectronicSVG className="w-6 rotate-90" />,
    to:"services/electronic"
  },
  Asesoría: {
    title: "Asesoría técnica",
    descriptions: [
      "Soporte técnico integral para proyectos.",
      "Tecnología, proveedores internacionales y normativas.",
    ],
    icon: <ConsultSVG className="w-6" />,
    to:"services/consultancies"
  },
};

export const ServicesHome = () => {
  const [active, setActive] = useState<keyof typeof data>("Software");

  return (
    <section className="relative px-4 py-8 mx-auto w-full max-w-4xl">
      <div className="flex flex-col justify-center items-center mx-auto mb-10 max-w-xl">
        <h2 className="text-xl font-extrabold md:text-2xl xl:text-3xl">
          Nuestros servicios
        </h2>
        <p className="text-xs italic text-center md:text-sm text-placeholder">
          Desarrollamos soluciones integrales que combinan software a medida,
          diseño electrónico de alta precisión y asesoramiento técnico
          especializado, adaptándonos a los requerimientos específicos de cada
          proyecto.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 justify-start w-full">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key as keyof typeof data)}
            className={`relative flex items-center gap-x-2 px-2 py-2 text-sm md:text-base md:px-4 rounded-t-md font-bold cursor-pointer transition-colors duration-200 ease-in-out ${
              active === key
                ? "bg-primary text-surface"
                : "bg-surface border-x border-t hover:bg-surface border-surface text-text-main"
            }`}
          >
            <span className="hidden md:block">
              {data[key as keyof typeof data].icon}
            </span>
            {key}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden relative p-6 rounded-b-lg rounded-tr-lg border border-surface bg-surface/25"
        >
          <div className="absolute top-30 right-30 scale-[1000%] text-surface -z-10">
            {data[active].icon}
          </div>

          <h2 className="mb-4 text-xl font-bold text-center md:text-2xl xl:text-3xl text-link-hover">
            {data[active].title}
          </h2>
          <ol className="space-y-2 text-xs italic list-disc list-inside text-text-muted md:text-sm xl:text-base">
            {data[active].descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ol>

          <nav className="mt-5">
            <Link
              to={data[active as keyof typeof data].to}
              className="px-2 py-2 mt-6 text-sm font-bold underline rounded-md transition cursor-pointer text-link hover:text-link-hover"
            >
              Saber más
            </Link>
          </nav>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
