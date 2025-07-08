import { motion } from "framer-motion";

interface IconGlowBoxProps {
  imgSrc: string;
  href?: string;
  alt?: string;
  glowColor?: string;
  onClick?: () => void;
  newTab?: boolean;
}

export const ContactBox = ({
  imgSrc,
  alt = "",
  glowColor = "#38d8d2",
  href = "/#",
  newTab = true,
}: IconGlowBoxProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <motion.div
        className="p-2 w-10 h-10 rounded-md border shadow-md backdrop-blur-sm cursor-pointer"
        style={{
          borderColor: `${glowColor}10`,
          backgroundColor: `${glowColor}25`,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: `${glowColor}25`,
          boxShadow: `0px 0px 3px ${glowColor}80`,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={imgSrc}
          alt={alt}
          className="object-contain w-full h-full select-none"
          draggable={false}
        />
      </motion.div>
    </a>
  );
};
