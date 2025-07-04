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
  return (
    <section className="overflow-hidden py-6 mx-auto w-full max-w-4xl">
      <h2 className="mb-5 text-xl font-extrabold text-center md:text-2xl xl:text-3xl">
        Patrocinadores
      </h2>
      <nav className="flex flex-wrap gap-5 justify-center items-center">
        {sponsors.map((logo, idx) => (
          <div className="p-1 w-32 rounded-md border-2 grayscale bg-surface/30 border-surface hover:grayscale-0">
            <img
              key={idx}
              src={logo}
              alt={`Sponsor ${idx}`}
              className="object-contain"
              draggable={false}
            />
          </div>
        ))}
      </nav>
    </section>
  );
};
