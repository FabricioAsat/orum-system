import { motion } from "framer-motion";

interface ProjectInterface {
  img: string;
  title: string;
  desc: string;
}

export const ServiceProject = ({ img, title, desc }: ProjectInterface) => {
  return (
    <motion.div
      className="overflow-hidden relative p-1 w-full max-w-xl h-80 bg-center bg-cover rounded-2xl border shadow-xl group border-surface"
      style={{
        backgroundImage: `url(${img})`,
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
        <h3 className="mb-1 text-lg font-bold text-link">{title}</h3>
        <p className="text-sm italic text-text-muted">{desc}</p>
      </div>
    </motion.div>
  );
};
