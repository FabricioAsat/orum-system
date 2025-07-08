import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface YourProjectInterface {
  title: string;
  desc: string;
  img: string;
}

export const YourProject = ({ title, desc, img }: YourProjectInterface) => {
  return (
    <div className="flex flex-col items-center mx-auto mt-20 max-w-4xl rounded-2xl border shadow-md transition-shadow md:items-start md:flex-row border-surface">
      <div className="flex flex-col flex-1 items-center p-6 h-full lg:items-start md:text-left">
        <h3 className="mb-2 w-full text-2xl font-bold text-center text-link">
          {title}
        </h3>
        <p className="mb-4 w-full max-w-md italic text-placeholder">{desc}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 mt-5 font-bold rounded-md shadow-md transition-colors cursor-pointer bg-primary hover:bg-primary-hover text-surface"
        >
          <Link to={"/contact"}>Consulta ahora</Link>
        </motion.button>
      </div>

      <div className="flex-shrink-0 w-72 h-72 lg:h-96 lg:w-96">
        <img
          src={img}
          alt="Tu proyecto aquí Image"
          className="object-contain w-full h-full"
          draggable={false}
        />
      </div>
    </div>
  );
};
