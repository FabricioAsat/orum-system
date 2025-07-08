import { useState } from "react";

import { ContactForm } from "@/components/contact/ContactForm";
import { Modal } from "@/components/contact/Modal";
import { ContactBox } from "@/components/ContactBox";
import { PageContainer } from "@/components/PageContainer";

import whatsappSVG from "@assets/svg/whatsapp.svg";
import linkedinSVG from "@assets/svg/linkedin.svg";
import instagramSVG from "@assets/svg/instagram.svg";
import mailSVG from "@assets/svg/mail.svg";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PageContainer>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Info de contacto */}
        <div className="text-text-muted space-y-4 hidden lg:block mt-10">
          <span className="flex flex-col w-full">
            <h2 className="text-3xl font-bold text-text-main">Contacto</h2>
            <p className="text-text-muted font-semibold text-lg">
              Estamos disponibles para ayudarte.
            </p>
            <p className="text-sm italic text-warning">
              En caso de fallar el formulario, puedes consultarnos en las
              siguientes direcciones.
            </p>
          </span>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-text-main">Dirección:</span>{" "}
              San Martín, Buenos Aires, Argentina
            </p>
            <p>
              <span className="font-semibold text-text-main">WhatsApp:</span>{" "}
              +54 9 11 3802 4126
            </p>
            <p>
              <span className="font-semibold text-text-main">
                Soporte técnico:{" "}
              </span>{" "}
              info@orum-system.com
            </p>
            <p>
              <span className="font-semibold text-text-main">Ventas:</span>{" "}
              ventas@orum-system.com
            </p>
          </div>
        </div>

        <div className="rounded-xl p-2 lg:border lg:border-input-border shadow-md max-w-2xl mx-auto w-full">
          <ContactForm setShowModal={setShowModal} />
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Consulta deshabilitada"
        message="Por el momento, el formulario no se encuentra activo. Para contactarnos, por favor utiliza otro medio disponible en el sitio."
      />
    </PageContainer>
  );
};
