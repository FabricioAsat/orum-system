import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ContactBox } from "@components/ContactBox";
import whatsappSVG from "@assets/svg/whatsapp.svg";
import linkedinSVG from "@assets/svg/linkedin.svg";
import instagramSVG from "@assets/svg/instagram.svg";
import mailSVG from "@assets/svg/mail.svg";
import { Modal } from "../Modal";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  return (
    <section className="flex overflow-hidden relative justify-center items-start px-6 py-24 w-full sm:pt-24 sm:pb-32">
      {/* Líneas verticales con desenfoque radial */}
      <div className="absolute inset-0 z-0 pointer-events-none lines-mask" />

      {/* Glow ambiental */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-primary-hover opacity-20 blur-[120px] rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-text-main max-w-[90%] sm:max-w-2xl">
        <span className="flex flex-col mb-5 font-extrabold">
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            ORUM System
          </h1>
          <h2 className="text-2xl text-link-hover sm:text-3xl md:text-4xl">
            Innovación a medida
          </h2>
        </span>
        <p className="mb-8 text-xs italic sm:text-base text-placeholder">
          Diseñamos soluciones electrónicas y de software que se adaptan a las
          necesidades reales de cada cliente, integrando innovación, precisión y
          funcionalidad en cada etapa del proceso.
        </p>

        <nav className="flex flex-col gap-4 justify-center items-center select-none sm:flex-row sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 w-full font-bold rounded-full transition cursor-pointer bg-primary hover:bg-primary-hover text-background sm:w-auto"
          >
            <Link to={"/contact"}>Contacta ya →</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 w-full font-bold text-white rounded-full border-2 transition cursor-pointer border-border hover:bg-surface/50 sm:w-auto"
          >
            <Link to={"/about"}>Saber más</Link>
          </motion.button>
        </nav>
      </div>
      <nav className="hidden flex-col gap-y-3 justify-center items-center px-2 ml-10 h-full lg:flex">
        <ContactBox
          imgSrc={whatsappSVG}
          alt="Whatsapp svg"
          glowColor="#38d8d2"
          href="https://wa.me/5491138024126"
        />
        <ContactBox
          imgSrc={mailSVG}
          alt="Support Mail svg"
          glowColor="#38d8d2"
          href="mailto:info@orum-system.com"
        />

        <ContactBox
          imgSrc={instagramSVG}
          alt="Whatsapp svg"
          glowColor="#38d8d2"
          href="https://www.instagram.com/orum.system/"
        />

        <button onClick={openModal}>
          <ContactBox
            imgSrc={linkedinSVG}
            alt="LinkedIn svg"
            glowColor="#38d8d2"
          />
        </button>
      </nav>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="En desarrollo"
        message="Por el momento nuestro LinkedIn se encuentra en construcción."
      />
    </section>
  );
};
