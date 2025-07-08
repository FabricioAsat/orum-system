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
    title: "Rubro de Tecnología",
    desc: "Consultoría integral para implementar y optimizar soluciones tecnológicas personalizadas para tu empresa.",
    img: TechIMG,
  },
  {
    title: "Desarrollo de Proveedores",
    desc: "Estrategias para encontrar y consolidar alianzas con proveedores confiables que aseguren eficiencia operativa.",
    img: SuppliersIMG,
  },
  {
    title: "Armado de Líneas de Producción",
    desc: "Diseño de procesos productivos eficientes, garantizando calidad y rendimiento en cada etapa.",
    img: ProductionLineIMG,
  },
  {
    title: "Adaptación de Normativa Internacional",
    desc: "Acompañamiento para cumplir con normas internacionales, mejorando competitividad y acceso a nuevos mercados.",
    img: InternationalStandardsIMG,
  },
];

export const ServiceConsultancies = () => {
  return (
    <PageContainer>
      <section className="px-4 py-20 mx-auto max-w-7xl text-text-main">
        {/* Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-link">
            Asesoría Tecnológica para PYMEs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-placeholder">
            En <span className="font-semibold text-text-main">Orum</span> te
            acompañamos en el camino hacia la modernización. Brindamos
            asesoramiento experto para potenciar tus procesos, cumplir
            normativas internacionales y escalar tecnológicamente con confianza.
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
