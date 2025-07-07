import { motion } from "framer-motion";

import purchaseIMG from "@assets/svg/modules/purchasing.svg";
import salesIMG from "@assets/svg/modules/sales.svg";
import adminIMG from "@assets/svg/modules/administration.svg";
import productionIMG from "@assets/svg/modules/production.svg";
import hrIMG from "@assets/svg/modules/hr.svg";
import maintenanceIMG from "@assets/svg/modules/maintenance.svg";
import warehouseIMG from "@assets/svg/modules/warehouse.svg";

export const LogicPV = () => {
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
          Gestión integral para puntos de venta únicos o múltiples
        </p>

        {/* Descripción principal */}
        <p className="mt-6 text-lg text-text-muted">
          Logic‑PV es una solución completa diseñada para modernizar y agilizar
          la gestión de comercios con uno o varios puntos de venta.
          <br />
          Desde el control de inventario hasta la facturación, el sistema
          permite centralizar toda la operación de forma eficiente, segura y
          adaptable a cualquier escala de negocio.
          <br />
          Pensado para locales, cadenas y comercios con visión de crecimiento,{" "}
          <b>
            Logic‑PV ofrece herramientas intuitivas que optimizan tiempos,
            mejoran el control y reducen errores operativos.
          </b>
        </p>

        {/* Características clave */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Características destacadas
        </h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-placeholder">
          <li>
            <strong>Gestión integral de puntos de venta:</strong> unificá toda
            la operación en una sola plataforma.
          </li>
          <li>
            <strong>Control total de inventario:</strong> con alertas por stock
            mínimo y múltiples depósitos.
          </li>
          <li>
            <strong>Gestión de personal:</strong> con marcación horaria local o
            remota, incluso mediante biometría.
          </li>
          <li>
            <strong>Facturación electrónica y órdenes de compra:</strong> con
            soporte para impresoras fiscales.
          </li>

          <li>
            <strong>Base de datos centralizada y acceso remoto seguro:</strong>{" "}
            ideal para monitorear desde cualquier lugar.
          </li>
          <li>
            <strong>Gestión de usuarios con permisos diferenciados:</strong>{" "}
            adaptable a cada rol del equipo.
          </li>
          <li>
            <strong>Compatibilidad con Windows 10/11 (64 bits).</strong>
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
              src={adminIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Administración
            </h4>
            <small className="text-sm text-center">
              Gestión de clientes, proveedores, cuentas corrientes, pagos y
              cobranzas.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={warehouseIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Inventario
            </h4>
            <small className="text-sm text-center">
              Control de stock, alarmas automáticas por niveles críticos y
              gestión de depósitos múltiples.
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
              Marcación de personal mediante biometría o credenciales seguras.
            </small>
          </div>

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
              Control de operaciones en múltiples cajas o sucursales,
              estadísticas en tiempo real y reportes detallados.
            </small>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
