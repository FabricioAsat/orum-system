import { PageContainer } from "@/components/PageContainer";
import { ServiceProject } from "@/components/services/ServiceProject";
import { YourProject } from "@/components/services/YourProject";
import CNCIMG from "@assets/svg/services/cnc.svg";
import ControlBoardIMG from "@assets/svg/services/control-board.svg";
import RespiratorCoreIMG from "@assets/svg/services/respirator-core.svg";
import SmartSensorsIMG from "@assets/svg/services/smart-sensors.svg";
import YourProjectIMG from "@assets/svg/services/your-project.svg";

const projects = [
  {
    title: "Control CNC para Guillotinas y Plegadoras",
    desc: "Diseño y producción de controlador CNC para guillotinas y plegadoras industriales.",
    img: CNCIMG,
  },
  {
    title: "Placa de Control para Equipos de Medición",
    desc: "Desarrollo de línea automatizada para placas de control en equipos de medición de frenos, suspensión y alineación vehicular.",
    img: ControlBoardIMG,
  },
  {
    title: "Core para Respirador Artificial",
    desc: "Diseño de una placa microprocesada para el core de un respirador artificial 100% automatizado.",
    img: RespiratorCoreIMG,
  },
  {
    title: "Instrumentación y Sensores Inteligentes",
    desc: "Desarrollo de sensores y sistemas de instrumentación para monitoreo en tiempo real de variables críticas.",
    img: SmartSensorsIMG,
  },
];

export const ServiceElectronic = () => {
  return (
    <PageContainer>
      {" "}
      <section className="px-4 py-20 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Ingeniería Electrónica en Orum
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span>, nos
            especializamos en el diseño y desarrollo de soluciones electrónicas
            a medida para la industria. Nuestro equipo trabaja desde el diseño
            de circuitos hasta la implementación de sistemas embebidos,
            priorizando siempre la innovación tecnológica y la eficiencia de
            cada proceso.
          </p>
        </div>

        {/* Proyectos */}
        <div className="grid gap-10 mx-auto w-full max-w-4xl md:grid-cols-2">
          {projects.map((project, i) => (
            <ServiceProject
              key={i}
              desc={project.desc}
              img={project.img}
              title={project.title}
            />
          ))}
        </div>

        <YourProject
          label="Realizar consulta"
          img={YourProjectIMG}
          title="El próximo ejemplo será su proyecto"
          desc="¿Tenés una idea? Convertí tu concepto en una solución electrónica
          funcional con nuestro equipo de ingeniería. Juntos, transformamos
          ideas en innovación real."
        />
      </section>
    </PageContainer>
  );
};
