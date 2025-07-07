import focusIMG from "@assets/focus.jpg";
import innovationIMG from "@assets/innovation.jpg";
import engineerIMG from "@assets/engineer.jpg";

const features = [
  {
    title: "Ingeniería Integral",
    description:
      "Desde el diseño de hardware hasta la app móvil, manejamos el proyecto de punta a punta.",
    img: engineerIMG,
  },
  {
    title: "Innovación Continua",
    description:
      "Mantenemos la tecnología al día, aplicando lo más novedoso en cada desarrollo.",
    img: innovationIMG,
  },
  {
    title: "Enfoque Personalizado",
    description:
      "Adaptamos cada solución a la necesidad específica de tu empresa o industria.",
    img: focusIMG,
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 mt-20 rounded-3xl">
      <div className="mx-auto mb-12 max-w-6xl text-center px-4">
        <h2 className="text-4xl font-extrabold text-text-main">
          ¿Por qué elegirnos?
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 justify-items-center px-4 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="overflow-hidden max-w-xl w-full relative h-80 bg-center bg-cover rounded-2xl shadow-xl group hover:scale-105 transition-all"
            style={{
              backgroundImage: `url(${feature.img})`,
            }}
          >
            <div className="absolute bottom-0 p-4 w-full backdrop-blur-sm bg-background/75">
              <h3 className="mb-1 text-lg font-bold text-link">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted italic">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
