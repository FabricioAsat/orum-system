import { motion } from "framer-motion";

import purchaseIMG from "@assets/svg/modules/purchasing.svg";
import salesIMG from "@assets/svg/modules/sales.svg";
import adminIMG from "@assets/svg/modules/administration.svg";
import trafficIMG from "@assets/svg/modules/traffic.svg";
import dispatchIMG from "@assets/svg/modules/dispatch.svg";
import hrIMG from "@assets/svg/modules/hr.svg";
import maintenanceIMG from "@assets/svg/modules/maintenance.svg";
import warehouseIMG from "@assets/svg/modules/warehouse.svg";
import reportsIMG from "@assets/svg/modules/reports.svg";

export const LogicT = () => {
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
        <h2 className="text-4xl font-bold text-primary">Logic‑T</h2>
        <p className="mt-2 text-xl font-medium text-success">
          Gestión integral para empresas de transporte
        </p>

        {/* Descripción principal */}
        <p className="mt-6 text-lg text-text-muted">
          Logic‑T es mucho más que un software. Es una solución integral que
          permite gestionar cada área de tu operación de transporte desde un
          solo lugar: ventas, compras, administración, tráfico, despacho,
          mantenimiento, RRHH y más. Con tecnología robusta y simple de usar,
          Logic‑T transforma tu manera de operar.
        </p>

        {/* Características clave */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Características que marcan la diferencia
        </h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-placeholder">
          <li>
            <strong>Control total con base local y acceso remoto:</strong> tus
            datos se alojan en tu servidor local con acceso remoto seguro.
            Máxima seguridad y continuidad operativa desde cualquier lugar.
          </li>
          <li>
            <strong>Comunicación directa con conductores:</strong> enviá
            órdenes, alertas o novedades vía App o Email directo al celular del
            chofer. Sin errores, sin complicaciones.
          </li>
          <li>
            <strong>Actualizaciones gratuitas de por vida:</strong> todas las
            mejoras y nuevas funciones sin costos extra.
          </li>
          <li>
            <strong>Marcación de horarios:</strong> desde app o terminal local,
            con ubicación geográfica incluida.
          </li>
        </ul>

        {/* Planes de adquisición */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Planes flexibles
        </h3>
        <div className="grid gap-6 mt-4 md:grid-cols-2">
          <div className="p-6 rounded-lg border shadow-md bg-surface/25 border-surface">
            <h4 className="text-lg font-bold text-success">Abono mensual</h4>
            <p className="mt-2 text-placeholder">
              Cuotas accesibles sin necesidad de grandes erogaciones iniciales.
              Todos los beneficios del sistema con inversión controlada.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-md bg-surface/25 border-surface">
            <h4 className="text-lg font-bold text-success">Licencia única</h4>
            <p className="mt-2 text-placeholder">
              Pagás una sola vez y utilizás Logic‑T sin suscripciones ni cuotas
              fijas. Inversión predecible, sin sorpresas.
            </p>
          </div>
        </div>

        {/* Módulos */}
        <h3 className="mt-12 text-2xl font-semibold text-primary-hover">
          Módulos incluidos
        </h3>
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
              Cotizaciones, gestión de clientes y pedidos.
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
              Órdenes, proveedores y cuentas corrientes.
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
              Facturación, cobros, pagos y finanzas.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={trafficIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Tráfico
            </h4>
            <small className="text-sm text-center">
              Planificación de rutas y gestión de flota.
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
              Coordinación logística y servicios.
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
              Sueldos, contratos y asistencia.
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
              Gestión integral de unidades.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={warehouseIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Depósito
            </h4>
            <small className="text-sm text-center">
              Control de stock e insumos.
            </small>
          </div>
        </div>

        <div className="grid gap-4 items-start mx-auto mt-12 max-w-7xl lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col items-center">
            <h3 className="mt-12 text-2xl font-semibold text-primary-hover">
              Informes y reportes
            </h3>
            <span className="flex flex-col items-start mt-5 w-full">
              <p className="font-medium text-success">
                Estadísticas por unidad, conductor y cliente.
              </p>
              <p className="font-medium text-success">
                Dashboard personalizable.
              </p>
            </span>
            <p className="mt-4 italic leading-relaxed text-text-muted">
              Logic‑T ofrece reportes detallados por unidad (kilometraje,
              consumo, costos), desempeño de conductores, trazabilidad de
              mantenimientos y reparaciones. Cuenta con dashboards
              personalizables, alertas en tiempo real y opciones de exportación
              en PDF o Excel con envíos automáticos programados.
            </p>
          </div>

          {/* Imagen */}
          <div className="overflow-hidden w-full h-auto rounded-lg">
            <img
              src={reportsIMG}
              alt="Dashboard de reportes Logic-T"
              className="object-cover mx-auto w-full rounded-lg max-w-96"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
