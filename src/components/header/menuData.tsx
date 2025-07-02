import { ConsultSVG } from "@components/svg-tsx/ConsultSVG";
import { ElectronicSVG } from "@/components/svg-tsx/ElectronicSVG";
import { SoftwareSVG } from "@/components/svg-tsx/SoftwreSVG";

export const navLinks = [
  { label: "Nosotros", to: "/about" },
  { label: "Familia Logic", to: "/logic-family" },
  {
    label: "Servicios",
    dropdown: [
      {
        label: "Ingeniería electrónica",
        to: "/services/electronic",
        icon: <ElectronicSVG className="h-8 rotate-90" />,
      },
      {
        label: "Software a medida",
        to: "/services/software",
        icon: <SoftwareSVG className="p-1 h-8" />,
      },
      {
        label: "Asesoría técnica",
        to: "/services/consultancies",
        icon: <ConsultSVG className="p-1 w-8" />,
      },
    ],
  },
  { label: "Contacto", to: "/contact" },
  {
    label: "Descargas",
    dropdown: [
      {
        label: "Logic TR Brochure",
        to: "/download/logic-tr",
        icon: <SoftwareSVG className="p-1 h-8" />,
      },
      {
        label: "Logic T Brochure",
        to: "/download/logic-t",
        icon: <SoftwareSVG className="p-1 h-8" />,
      },
    ],
  },
];
