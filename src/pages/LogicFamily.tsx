import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import logicIMG from "@assets/logic.jpg";
import { PageContainer } from "@/components/PageContainer";
import { LogicT } from "@/components/logic-family/LogicT";
import { LogicP } from "@/components/logic-family/LogicP";
import { LogicPV } from "@/components/logic-family/LogicPV";

const data = {
  "Logic-T": <LogicT />,
  "Logic-P": <LogicP />,
  "Logic-PV": <LogicPV />,
  "Logic-D": <div>asdadsdas</div>,
  "Logic-TR": <div>asdadsdas</div>,
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
        <div className="flex flex-col justify-center items-center mx-auto mb-10 max-w-xl">
          <h2 className="text-xl font-extrabold md:text-2xl xl:text-3xl">
            Familia Logic
          </h2>
          <p className="mt-3 text-xs italic text-center md:text-sm text-placeholder">
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
        {/* Content */}
      </section>
    </PageContainer>
  );
};
