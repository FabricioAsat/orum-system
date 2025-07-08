import { motion } from "framer-motion";

import focusIMG from "@assets/focus.jpg";
import innovationIMG from "@assets/innovation.jpg";
import engineerIMG from "@assets/engineer.jpg";

const features = [
  {
    title: "Ingeniería Integral",
    description:
      "Desde el diseño de hardware hasta la app móvil, manejamos el proyecto de punta a punta.",
    img: engineerIMG,
  },
  {
    title: "Innovación Continua",
    description:
      "Mantenemos la tecnología al día, aplicando lo más novedoso en cada desarrollo.",
    img: innovationIMG,
  },
  {
    title: "Enfoque Personalizado",
    description:
      "Adaptamos cada solución a la necesidad específica de tu empresa o industria.",
    img: focusIMG,
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 mt-20 rounded-3xl">
      <div className="px-4 mx-auto mb-12 max-w-6xl text-center">
        <h2 className="text-4xl font-extrabold text-text-main">
          ¿Por qué elegirnos?
        </h2>
      </div>

      <div className="grid gap-8 justify-items-center px-4 mx-auto max-w-7xl lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="overflow-hidden relative w-full max-w-xl h-80 bg-center bg-cover rounded-2xl shadow-xl group"
            style={{
              backgroundImage: `url(${feature.img})`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.35)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="absolute bottom-0 p-4 w-full backdrop-blur-sm bg-background/75">
              <h3 className="mb-1 text-lg font-bold text-link">
                {feature.title}
              </h3>
              <p className="text-sm italic text-text-muted">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
