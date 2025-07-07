import { motion } from "framer-motion";

import purchaseIMG from "@assets/svg/modules/purchasing.svg";
import salesIMG from "@assets/svg/modules/sales.svg";
import adminIMG from "@assets/svg/modules/administration.svg";
import IOIMG from "@assets/svg/modules/IO.svg";
import dispatchIMG from "@assets/svg/modules/dispatch.svg";
import hrIMG from "@assets/svg/modules/hr.svg";
import maintenanceIMG from "@assets/svg/modules/maintenance.svg";
export const LogicD = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden relative p-6 rounded-b-lg rounded-tr-lg border border-surface bg-surface/25"
    >
      <div className="mx-auto max-w-6xl">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-primary">Logic‑D</h2>
        <p className="mt-2 text-xl font-medium text-success">
          Gestión integral para grandes depósitos
        </p>

        {/* Descripción principal */}
        <p className="mt-6 text-lg text-text-muted">
          Logic‑D es una solución avanzada para empresas que operan depósitos de
          gran volumen, centros logísticos o almacenes centralizados.
          <br />
          Mediante módulos especializados, permite controlar el ingreso y egreso
          de mercadería, administrar pedidos, coordinar despachos y supervisar
          inventarios desde una única plataforma, con precisión y trazabilidad
          total.
          <br />
          Con una interfaz intuitiva y herramientas adaptadas a las operaciones
          de gran escala, Logic‑D potencia la eficiencia logística, reduce
          errores y mejora la toma de decisiones en tiempo real
        </p>

        {/* Características clave */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Características destacadas
        </h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-placeholder">
          <li>
            <strong>Gestión integral de operaciones logísticas:</strong> desde
            el ingreso hasta el despacho de mercadería.
          </li>
          <li>
            <strong>Informes detallados:</strong> por movimientos, productos y
            clientes.
          </li>
          <li>
            <strong>Estadísticas personalizadas:</strong> visuales y exportables
            para una lectura clara del rendimiento.
          </li>
          <li>
            <strong>Órdenes impresas o enviadas vía email/App:</strong>{" "}
            optimizando tiempos y comunicación interna.
          </li>

          <li>
            <strong>Base de datos centralizada:</strong> con acceso remoto
            seguro desde cualquier ubicación.
          </li>
          <li>
            <strong>Control de usuarios con permisos segmentados:</strong> según
            función y jerarquía.
          </li>
          <li>
            <strong>Compatibilidad con Windows 10/11 (64 bits).</strong>
          </li>
          <li>
            <strong>Sistema de marcación horaria:</strong> tanto local como
            desde App móvil con geolocalización.
          </li>
        </ul>

        {/* Módulos */}
        <div className="">
          <h3 className="mt-12 text-2xl font-semibold text-primary-hover">
            Módulos incluidos
          </h3>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 text-text-muted">
          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={salesIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Ventas
            </h4>
            <small className="text-sm text-center">
              cotizaciones, gestión de clientes, seguimiento de pedidos.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={purchaseIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Compras
            </h4>
            <small className="text-sm text-center">
              Órdenes, gestión de proveedores y cuentas corrientes.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={adminIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Administración
            </h4>
            <small className="text-sm text-center">
              Facturación, cobros, pagos y control financiero.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={IOIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Ingreso/Egreso
            </h4>
            <small className="text-sm text-center">
              Control detallado de mercadería, ubicación y preferencias de
              estibamiento.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={dispatchIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Despacho
            </h4>
            <small className="text-sm text-center">
              Planificación logística, servicios de entrega y seguimiento de
              cargas.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={hrIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Recursos Humanos
            </h4>
            <small className="text-sm text-center">
              Gestión de personal, control de asistencia, sueldos y contratos.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={maintenanceIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Mantenimiento
            </h4>
            <small className="text-sm text-center">
              Control de mantenimiento preventivo y correctivo de equipos e
              instalaciones.
            </small>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
