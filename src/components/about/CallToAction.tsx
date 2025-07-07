import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="mt-20 text-center">
      <p className="mb-4 text-xl font-semibold text-text-main">
        ¿Listo para transformar tu idea en una solución real?
      </p>
      <Link
        to="/contact"
        className="inline-block px-6 py-2 font-bold text-surface bg-primary rounded-full hover:bg-primary-hover transition-all duration-200"
      >
        Contáctanos
      </Link>
    </div>
  );
};
