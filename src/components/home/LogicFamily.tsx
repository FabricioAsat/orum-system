import { useState } from "react";
import logicIMG from "@assets/logic.jpg";
import { Link } from "react-router-dom";

export const LogicFamily = () => {
  const [enter, setEnter] = useState(false);

  const handleEnter = () => {
    setEnter(true);
  };

  const handleExit = () => {
    setEnter(false);
  };

  return (
    <section className="mx-auto my-12 max-w-4xl md:my-24 lg:grid-cols-3">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        className={`overflow-hidden relative w-full lg:rounded-3xl`}
      >
        {/* Fondo con imagen en escala de grises */}
        <aside
          className={`absolute inset-0 bg-center bg-cover opacity-80 transition-all duration-300 ${
            enter ? "grayscale-0 lg:scale-105" : "grayscale"
          }`}
          style={{ backgroundImage: `url(${logicIMG})` }}
        />

        {/* Overlay oscuro para mayor contraste */}
        <div className="absolute inset-0 bg-background/70" />

        {/* Contenido principal */}
        <div className="grid relative z-10 grid-cols-1 gap-10 items-center px-6 py-16 w-full md:grid-cols-2 md:px-20 md:py-24">
          {/* Izquierda */}
          <div className="flex flex-col items-start max-w-xl text-white">
            <h1 className="text-3xl font-extrabold drop-shadow-md text-link md:text-4xl">
              Familia Logic
            </h1>
            <p className="mt-4 text-base font-medium md:text-lg text-text-muted">
              Tecnología modular para un control inteligente.
            </p>
            <Link
              to={"/logic-family"}
              className="px-4 py-2 mt-8 font-bold rounded-xl transition duration-200 cursor-pointer text-surface bg-link hover:bg-link-hover"
            >
              Ver familia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
