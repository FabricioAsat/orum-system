import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        ¿Listo para transformar tu idea en una solución real?
      </h2>
      <Link
        to="/contact"
        className="inline-block px-6 py-3 font-semibold rounded-full transition-colors duration-300 md:text-lg text-surface bg-primary hover:bg-primary-hover"
      >
        Consulta ya!
      </Link>
    </div>
  );
};
