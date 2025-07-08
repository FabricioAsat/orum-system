import TechIMG from "@assets/svg/services/tech.svg";
import SuppliersIMG from "@assets/svg/services/suppliers.svg";
import ProductionLineIMG from "@assets/svg/services/production-line.svg";
import InternationalStandardsIMG from "@assets/svg/services/international-standards.svg";
import InnovationIMG from "@assets/svg/services/innovation.svg";
import { ServiceProject } from "@/components/services/ServiceProject";
import { YourProject } from "@/components/services/YourProject";
import { PageContainer } from "@/components/PageContainer";

const consultanciesAreas = [
  {
    title: "Transformación Tecnológica Estratégica",
    desc: "Asesoramos a tu empresa en la adopción eficiente de nuevas tecnologías, con foco en automatización, digitalización de procesos y herramientas que escalen con tu operación.",
    img: TechIMG,
  },
  {
    title: "Gestión Eficiente de Proveedores",
    desc: "Optimizamos la relación con proveedores mediante procesos de evaluación, homologación y seguimiento, fortaleciendo la cadena de suministro con socios confiables y sostenibles.",
    img: SuppliersIMG,
  },
  {
    title: "Diseño de Líneas de Producción Inteligentes",
    desc: "Planificamos e implementamos líneas de producción adaptadas a tu entorno industrial, combinando eficiencia operativa con trazabilidad y control de calidad en tiempo real.",
    img: ProductionLineIMG,
  },
  {
    title: "Implementación de Normativas Globales",
    desc: "Te guiamos en la adaptación y cumplimiento de normas internacionales (ISO, CE, etc.), facilitando auditorías, acceso a nuevos mercados y mejora en procesos internos.",
    img: InternationalStandardsIMG,
  },
];

export const ServiceConsultancies = () => {
  return (
    <PageContainer>
      <section className="px-4 py-10 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Asesoría Tecnológica para PYMEs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-center text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span>,
            impulsamos la transformación tecnológica de pequeñas y medianas
            empresas mediante asesoría especializada. Nuestro equipo acompaña a
            cada organización en el análisis, planificación y ejecución de
            estrategias que optimizan procesos, fortalecen la cadena de
            suministro y adaptan la infraestructura productiva a estándares
            internacionales. Desde la idea inicial hasta la implementación,
            transformamos desafíos técnicos en soluciones reales y escalables.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 mx-auto w-full max-w-4xl md:grid-cols-2">
          {consultanciesAreas.map((consult, i) => (
            <ServiceProject
              key={i}
              desc={consult.desc}
              img={consult.img}
              title={consult.title}
            />
          ))}
        </div>

        <YourProject
          desc="Nuestro equipo está listo para ayudarte a potenciar tu negocio con
              soluciones tecnológicas eficientes, estratégicas y alineadas con
              tus necesidades."
          img={InnovationIMG}
          label="Solicitá asesoría"
          title="¿Querés asesoramiento profesional?"
        />
      </section>
    </PageContainer>
  );
};
