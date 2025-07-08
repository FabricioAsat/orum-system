import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./TextArea";

export function ContactForm({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto px-4 py-12 w-full"
    >
      <h2 className="text-3xl font-bold text-text-main mb-6 text-center">
        Formulario de Contacto
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
        />

        <Input
          label="Correo electrónico"
          name="email"
          placeholder="Ingrese su correo electrónico"
          onChange={handleChange}
        />

        <Textarea
          label="Mensaje"
          name="message"
          placeholder="Escriba su mensaje..."
          onChange={handleChange}
        />

        <div className="flex justify-center">
          <div className="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 px-6 font-bold rounded-md shadow-md bg-primary cursor-pointer hover:bg-primary-hover text-surface transition-colors"
        >
          Enviar Consulta
        </motion.button>
      </form>
    </motion.section>
  );
}
