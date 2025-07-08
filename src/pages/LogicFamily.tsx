import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import logicIMG from "@assets/logic.jpg";
import { PageContainer } from "@/components/PageContainer";
import { LogicT } from "@/components/logic-family/LogicT";
import { LogicP } from "@/components/logic-family/LogicP";
import { LogicPV } from "@/components/logic-family/LogicPV";
import { LogicD } from "@/components/logic-family/LogicD";
import { LogicTR } from "@/components/logic-family/LogicTR";

const data = {
  "Logic-T": <LogicT />,
  "Logic-P": <LogicP />,
  "Logic-PV": <LogicPV />,
  "Logic-D": <LogicD />,
  "Logic-TR": <LogicTR />,
};

export const LogicFamily = () => {
  const [active, setActive] = useState<keyof typeof data>("Logic-T");

  return (
    <PageContainer>
      <aside className="rounded-xl lg:pt-0">
        <img
          src={logicIMG}
          alt="Logic Family"
          className="object-cover mx-auto w-full max-h-96 rounded-xl grayscale"
        />
      </aside>

      <section className="relative px-4 py-8 mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-start items-center mb-10 max-w-3xl lg:items-start">
          <h2 className="text-2xl font-extrabold md:text-3xl xl:text-4xl">
            Familia Logic
          </h2>
          <p className="mt-3 text-base italic text-center md:text-lg text-text-muted lg:text-start">
            Logic es una suite modular de software empresarial que integra lo
            mejor de la tecnología actual para transformar, automatizar y
            simplificar tus procesos productivos y de gestión.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-start w-full">
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
              {key}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">{data[active]}</AnimatePresence>

        {/* CTA */}

        <div
          className={`overflow-hidden relative mt-10 w-full border lg:rounded-lg border-surface`}
        >
          {/* Fondo con imagen en escala de grises */}
          <aside
            className={`absolute inset-0 bg-center bg-cover opacity-80 transition-all duration-300 -z-10 ${
              true ? "grayscale-0 lg:scale-105" : "grayscale"
            }`}
            style={{ backgroundImage: `url(${logicIMG})` }}
          />

          {/* Overlay oscuro para mayor contraste */}
          <div className="absolute inset-0 bg-background/70 -z-10" />

          <div className="z-10 px-4 py-10 mx-auto my-10 text-center rounded-2xl text-text-main sm:px-12">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Gestioná tu negocio con toda la potencia de Logic
            </h2>
            <p className="mb-6 text-base sm:text-lg text-text-muted">
              Turnos, Talleres, Presupuestos, Punto de Venta y Depósito — Todo
              en un solo sistema pensado para crecer con vos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="inline-block px-6 py-3 font-bold rounded-full transition-colors duration-300 cursor-pointer md:text-lg text-surface bg-primary hover:bg-primary-hover" to="/contact">Consulta ya!</Link>
            </motion.button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
