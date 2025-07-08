import { PageContainer } from "@/components/PageContainer";

import SystemTransportIMG from "@assets/svg/services/system-transport.svg";
import TaximeterIMG from "@assets/svg/services/taximeter.svg";
import PlantControlIMG from "@assets/svg/services/plant-control.svg";
import DataAnalysisIMG from "@assets/svg/services/data-analysis.svg";
import YourSoftwareIMG from "@assets/svg/services/your-software.svg";
import { YourProject } from "@/components/services/YourProject";
import { ServiceProject } from "@/components/services/ServiceProject";

const softwareProjects = [
  {
    title: "Plataforma Integral para Gestión de Empresas de Transporte",
    desc: "Sistema completo que centraliza contabilidad, inventario, ventas y recursos humanos, mejorando la trazabilidad, eficiencia operativa y control administrativo.",
    img: SystemTransportIMG,
  },
  {
    title: "App para Calibración y Control de Taxímetros y Tacógrafos",
    desc: "Solución multiplataforma (PC + móvil) que permite registrar, auditar y validar procesos de calibración con precisión y cumplimiento normativo.",
    img: TaximeterIMG,
  },
  {
    title: "Sistema de Gestión Inteligente para Plantas Verificadoras Técnicas",
    desc: "Automatización de procesos críticos en plantas VTV, eliminando errores manuales, mejorando los tiempos de respuesta y asegurando integridad de los datos.",
    img: PlantControlIMG,
  },
  {
    title: "Plataforma de Visualización y Análisis de Datos Industriales",
    desc: "Dashboard dinámico que procesa grandes volúmenes de datos en tiempo real para facilitar la toma de decisiones estratégicas y predictivas.",
    img: DataAnalysisIMG,
  },
];

export const ServiceSoftware = () => {
  return (
    <PageContainer>
      <section className="px-4 py-10 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Software Industrial a Medida, con Precisión y Escalabilidad
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-center text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span>,
            diseñamos soluciones de software personalizadas para automatizar
            procesos industriales, optimizar la operación y escalar con
            eficiencia. Trabajamos junto a tu equipo para comprender cada
            desafío técnico, aplicar tecnologías de vanguardia y entregar
            plataformas robustas, intuitivas y preparadas para crecer con tu
            negocio.
          </p>
        </div>

        {/* Proyectos */}
        <div className="grid gap-10 mx-auto w-full max-w-4xl md:grid-cols-2">
          {softwareProjects.map((project, i) => (
            <ServiceProject
              key={i}
              desc={project.desc}
              img={project.img}
              title={project.title}
            />
          ))}
        </div>

        {/* Cierre */}
        <YourProject
          label="Realizar consulta"
          img={YourSoftwareIMG}
          title=" ¿Tu empresa necesita software a medida?"
          desc="Nuestro equipo puede ayudarte a digitalizar y automatizar tus procesos. Contanos tu idea y la convertimos en una solución real."
        />
      </section>
    </PageContainer>
  );
};
