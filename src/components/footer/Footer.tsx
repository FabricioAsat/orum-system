import { Link } from "react-router-dom";
import { useState } from "react";

import whatsappSVG from "@assets/svg/whatsapp.svg";
import linkedinSVG from "@assets/svg/linkedin.svg";
import instagramSVG from "@assets/svg/instagram.svg";
import mailSVG from "@assets/svg/mail.svg";
import { Modal } from "../Modal";
import { Logo } from "../header/Logo";
import { ContactBox } from "../ContactBox";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  return (
    <footer className="flex flex-col items-start px-6 py-5 text-white md:px-20">
      <div className="flex flex-col gap-y-5 justify-between items-center mb-5 w-full md:flex-row">
        <nav>
          <Logo />
        </nav>

        <nav className="flex gap-x-3 justify-start items-center px-2 h-full grayscale md:justify-end">
          <ContactBox
            imgSrc={whatsappSVG}
            alt="Whatsapp svg"
            glowColor="#1b1a1d"
            href="https://wa.me/5491138024126"
          />
          <ContactBox
            imgSrc={mailSVG}
            alt="Support Mail svg"
            glowColor="#1b1a1d"
            href="mailto:info@orum-system.com"
          />

          <ContactBox
            imgSrc={instagramSVG}
            alt="Whatsapp svg"
            glowColor="#1b1a1d"
            href="https://www.instagram.com/orum.system/"
          />

          <button onClick={openModal}>
            <ContactBox
              imgSrc={linkedinSVG}
              alt="LinkedIn svg"
              glowColor="#1b1a1d"
            />
          </button>
        </nav>
      </div>

      <nav className="flex flex-wrap gap-5 items-center text-sm font-semibold text-text-muted md:mt-5">
        <Link
          className="transition-colors duration-200 ease-in-out hover:text-placeholder"
          to={"/about"}
        >
          Nuestra empresa
        </Link>
        <Link
          className="transition-colors duration-200 ease-in-out hover:text-placeholder"
          to={"/logic-family"}
        >
          Familia Logic
        </Link>
        <Link
          className="transition-colors duration-200 ease-in-out hover:text-placeholder"
          to={"/services"}
        >
          Servicios
        </Link>
        <Link
          className="transition-colors duration-200 ease-in-out hover:text-placeholder"
          to={"/"}
        >
          Trabaja con nosotros
        </Link>
        <Link
          className="transition-colors duration-200 ease-in-out hover:text-placeholder"
          to={"/"}
        >
          Contacto
        </Link>
      </nav>

      <div className="pt-3 mt-5 text-xs border-t text-placeholder border-border">
        <i>© 2025 Orum System. All rights reserved</i>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="En desarrollo"
        message="Por el momento nuestro LinkedIn se encuentra en construcción."
      />
    </footer>
  );
};
