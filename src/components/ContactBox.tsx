import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

interface IconGlowBoxProps {
  imgSrc: string;
  alt?: string;
  glowColor?: string; // ej: "#7CFFB8"
  onClick?: () => void;
}

export const ContactBox = ({
  imgSrc,
  alt = "",
  glowColor = "#38d8d2",
  onClick,
}: IconGlowBoxProps) => {
  return (
    <motion.div
      className={`p-2 w-10 h-10 rounded-md border shadow-md backdrop-blur-sm cursor-pointer border-primary/10 bg-primary/25`}
      whileHover={{
        scale: 1.1,
        backgroundColor: `${glowColor}25`, // 20 = ~12% alpha
        boxShadow: `0px 0px 3px ${glowColor}80`, // 80 = ~50% alpha
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="object-contain w-full h-full select-none"
        draggable={false}
      />
    </motion.div>
  );
};
