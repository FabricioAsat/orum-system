import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

import cva from "@assets/svg/sponsors/cva.svg";
import famac from "@assets/svg/sponsors/famac.svg";
import hermann from "@assets/svg/sponsors/hermann.svg";
import mach from "@assets/svg/sponsors/mach97.svg";
import motomel from "@assets/svg/sponsors/motomel.svg";
import royal from "@assets/svg/sponsors/royal.svg";
import simpa from "@assets/svg/sponsors/simpa.svg";
import sorensen from "@assets/svg/sponsors/sorensen.svg";

const sponsors = [cva, famac, hermann, mach, motomel, royal, simpa, sorensen];

export const Sponsors = () => {
  const duplicatedLogos = [...sponsors, ...sponsors];

  return (
    <div className="w-full overflow-hidden py-6">
      {duplicatedLogos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Sponsor ${idx}`}
          className="h-12 w-auto opacity-70 hover:opacity-100 transition"
          draggable={false}
        />
      ))}
    </div>
  );
};
