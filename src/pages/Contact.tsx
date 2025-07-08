import { useState } from "react";

import { ContactForm } from "@/components/contact/ContactForm";
import { Modal } from "@/components/Modal";
import { PageContainer } from "@/components/PageContainer";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PageContainer>
      <div className="grid gap-8 items-start lg:grid-cols-2">
        {/* Info de contacto */}
        <div className="px-2 mx-auto mt-10 space-y-4 w-full max-w-xl text-text-muted">
          <span className="flex flex-col w-full">
            <h2 className="text-3xl font-bold text-center text-text-main lg:text-start">
              Contacto
            </h2>
            <p className="text-lg font-semibold text-text-muted">
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
              <span className="font-semibold text-text-main">Instagram:</span>{" "}
              @orum.system
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
            <p className="italic text-text-muted">
              <span className="font-semibold">LinkedIn:</span> En
              construcción...
            </p>
          </div>
        </div>

        <div className="p-2 mx-auto w-full max-w-2xl rounded-xl shadow-md lg:border lg:border-input-border">
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
