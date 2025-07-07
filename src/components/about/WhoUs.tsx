export const WhoUs = () => {
  return (
    <>
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-text-main">
          ¿Quiénes somos?
        </h2>
        <p className="mt-4 text-lg text-placeholder">
          En <span className="font-bold text-link">Orum System</span>, con base
          en Argentina, fusionamos la ingeniería electrónica y el desarrollo de
          software para ofrecer{" "}
          <span className="italic">soluciones IoT integrales</span> y
          experiencias digitales a medida.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-link-hover">
            Misión y Visión
          </h3>
          <p className="text-placeholder">
            Nuestra misión es impulsar la transformación digital en industrias
            clave a través de tecnología inteligente. Creemos en el poder de
            soluciones electrónicas con impacto real, eficientes, seguras y
            escalables.
          </p>
          <p className="text-placeholder">
            Con una mirada constante en innovación y calidad, acompañamos a
            nuestros clientes desde el concepto técnico hasta la implementación
            final.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-link-hover">Especialidades</h3>
          <ul className="space-y-2 list-disc list-inside text-placeholder">
            <li>Desarrollo de software para PC, web y móviles.</li>
            <li>Diseño de hardware embebido y electrónica de control.</li>
            <li>
              Soluciones IoT: sensorización, conectividad, control y análisis.
            </li>
            <li>Automatización de procesos industriales y de laboratorio.</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 mt-16 lg:grid-cols-3 text-center">
        <div className="p-6 rounded-xl bg-surface/25 backdrop-blur-sm">
          <p className="text-success text-lg font-semibold italic">
            “No desarrollamos software. Creamos soluciones que funcionan desde
            el día uno.”
          </p>
        </div>
        <div className="p-6 rounded-xl bg-surface/25 backdrop-blur-sm">
          <p className="text-success text-lg font-semibold italic">
            “Tu empresa no necesita más tecnología. Necesita la adecuada.”
          </p>
        </div>
        <div className="p-6 rounded-xl bg-surface/25 backdrop-blur-sm">
          <p className="text-success text-lg font-semibold italic">
            “En Orum, cada solución es única. Como cada cliente.”
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-4 text-3xl font-bold text-link-hover">
          Algunos de Nuestros Logros
        </h3>
        <ul className="space-y-2 list-disc list-inside text-placeholder">
          <li>
            Plataforma de gestión para plantas de revisión técnica vehicular
            (RTO, VTV, ITV) interconectando más de 10 equipos multimarca.
          </li>
          <li>
            Sistemas de foto validación y final‑OK para procesos de inspección
            automotriz.
          </li>
          <li>
            Placas de pruebas ABS para fabricantes de camiones, con medición de
            freno y suspensión.
          </li>
          <li>
            Diseño de controladores para ascensores, respiradores asistidos y
            tacógrafos digitales.
          </li>
          <li>
            Soluciones industriales para medición automática de vacío y sensores
            de combustible en flota.
          </li>
        </ul>
      </div>
    </>
  );
};
