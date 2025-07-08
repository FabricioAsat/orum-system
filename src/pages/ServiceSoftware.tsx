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
    title: "Sistema de Gestión Integral para Empresa de Transporte",
    desc: "Plataforma que unifica contabilidad, inventario, ventas y recursos humanos para optimizar la administración completa del negocio.",
    img: SystemTransportIMG,
  },
  {
    title: "Aplicación de Control de Taxímetros",
    desc: "Solución multiplataforma (PC y móvil) para calibración precisa de taxímetros y tacógrafos, con interfaz intuitiva.",
    img: TaximeterIMG,
  },
  {
    title: "Sistema de Gestión de Plantas Verificadoras",
    desc: "Automatización integral de plantas verificadoras técnicas, reduciendo tiempos de operación y minimizando errores.",
    img: PlantControlIMG,
  },
  {
    title: "Plataforma de Análisis de Datos",
    desc: "Herramienta de análisis en tiempo real para visualizar, gestionar y tomar decisiones basadas en grandes volúmenes de datos.",
    img: DataAnalysisIMG,
  },
];

export const ServiceSoftware = () => {
  return (
    <PageContainer>
      <section className="px-4 py-20 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Desarrollo de Software a Medida
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span>,
            creamos soluciones digitales adaptadas a los desafíos únicos de cada
            industria. Con foco en escalabilidad, rendimiento y experiencia de
            usuario, transformamos ideas en plataformas eficientes y robustas
            que impulsan la productividad.
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
