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
    title: "Sistema CNC para Guillotinas y Plegadoras",
    desc: "Diseño y fabricación de controladores CNC de alta precisión para equipos industriales de corte y doblado, mejorando la automatización y la seguridad en planta.",
    img: CNCIMG,
  },
  {
    title: "Placa Inteligente para Equipos de Diagnóstico Vehicular",
    desc: "Desarrollo de una línea automatizada de producción para placas de control integradas en sistemas de medición de frenos, suspensión y alineación.",
    img: ControlBoardIMG,
  },
  {
    title: "Core Electrónico para Respiradores Automatizados",
    desc: "Diseño y validación de una placa microprocesada de alto rendimiento para respiradores artificiales con control totalmente automatizado.",
    img: RespiratorCoreIMG,
  },
  {
    title: "Sensores Inteligentes e Instrumentación Industrial",
    desc: "Diseño de soluciones para la recolección y monitoreo en tiempo real de variables críticas mediante sensores inteligentes e instrumentación embebida.",
    img: SmartSensorsIMG,
  },
];

export const ServiceElectronic = () => {
  return (
    <PageContainer>
      {" "}
      <section className="px-4 py-10 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Ingeniería Electrónica con Precisión Industrial
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span>,
            diseñamos y desarrollamos soluciones electrónicas a medida,
            adaptadas a los desafíos de la industria moderna. Nuestro equipo de
            ingenieros acompaña cada proyecto desde su concepción hasta su
            implementación, abarcando diseño de circuitos, prototipado y
            sistemas embebidos. Nos enfocamos en la optimización de procesos, la
            confiabilidad operativa y la innovación tecnológica como pilares
            clave para potenciar la productividad de nuestros clientes.
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
