import { motion } from "framer-motion";

import purchaseIMG from "@assets/svg/modules/purchasing.svg";
import salesIMG from "@assets/svg/modules/sales.svg";
import adminIMG from "@assets/svg/modules/administration.svg";
import productionIMG from "@assets/svg/modules/production.svg";
import hrIMG from "@assets/svg/modules/hr.svg";
import maintenanceIMG from "@assets/svg/modules/maintenance.svg";
import warehouseIMG from "@assets/svg/modules/warehouse.svg";

export const LogicP = () => {
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
        <h2 className="text-4xl font-bold text-primary">Logic‑P</h2>
        <p className="mt-2 text-xl font-medium text-success">
          Gestión integral para empresas productivas
        </p>

        {/* Descripción principal */}
        <p className="mt-6 text-lg text-text-muted">
          Logic‑P es una solución de software diseñada para optimizar cada etapa
          del ciclo productivo de una empresa. A través de módulos
          especializados, permite una gestión ágil y centralizada de las áreas
          clave: ventas, compras, administración, producción, recursos humanos,
          mantenimiento y más.
        </p>

        {/* Características clave */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Características destacadas
        </h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-placeholder">
          <li>
            <strong>Gestión integral de procesos productivos:</strong> desde la
            planificación hasta la ejecución y control.
          </li>
          <li>
            <strong>Informes analíticos detallados:</strong> por producto,
            proceso, cliente y variables personalizadas.
          </li>
          <li>
            <strong>Estadísticas dinámicas:</strong> que brindan visibilidad en
            tiempo real para la toma de decisiones.
          </li>
          <li>
            <strong>Órdenes de producción automatizadas:</strong> con
            posibilidad de impresión, envío por correo o App.
          </li>

          <li>
            <strong>Base de datos centralizada y acceso remoto seguro:</strong>{" "}
            ideal para equipos distribuidos.
          </li>
          <li>
            <strong>Gestión de usuarios con permisos diferenciados:</strong>{" "}
            para mantener el control y la seguridad.
          </li>
          <li>
            <strong>Compatibilidad con Windows 10/11 (64 bits).</strong>
          </li>
          <li>
            <strong>Sistema de marcación horaria:</strong> tanto local como
            remoto, vía App con geolocalización.
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
              cotizaciones, gestión de clientes y pedidos.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={purchaseIMG}
              alt="Purchase Image"
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
              alt="Administration Image"
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
              src={productionIMG}
              alt="Production Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Producción
            </h4>
            <small className="text-sm text-center">
              Control total de los procesos productivos, con trazabilidad y
              eficiencia.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={hrIMG}
              alt="Human Resources Image"
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
              alt="Maintenance Image"
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
              alt="Warehouse Image"
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
      </div>
    </motion.section>
  );
};
