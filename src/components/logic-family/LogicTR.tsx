import { motion } from "framer-motion";

import purchaseIMG from "@assets/svg/modules/purchasing.svg";
import clientsIMG from "@assets/svg/modules/clients.svg";
import adminIMG from "@assets/svg/modules/administration.svg";
import workshopIMG from "@assets/svg/modules/workshop.svg";
import maintenanceIMG from "@assets/svg/modules/maintenance.svg";

export const LogicTR = () => {
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
        <h2 className="text-4xl font-bold text-primary">Logic‑TR</h2>
        <p className="mt-2 text-xl font-medium text-success">
          Gestión integral para talleres de reparación vehicular
        </p>

        {/* Descripción principal */}
        <p className="mt-6 text-lg text-text-muted">
          Logic‑TR es un software especializado que permite a talleres de
          reparación vehicular trabajar de manera ágil, organizada y cumpliendo
          con el marco legal vigente
          <br />
          Desde la apertura de órdenes de reparación hasta la generación de
          reportes y facturación, Logic‑TR centraliza todos los procesos
          operativos en una plataforma intuitiva y segura
        </p>

        {/* Características clave */}
        <h3 className="mt-10 text-2xl font-semibold text-primary-hover">
          Características principales
        </h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-placeholder">
          <li>
            <strong>Cumplimiento normativo garantizado:</strong> Logic‑TR
            registra cada reparación conforme al Artículo 35, Inciso 13 de la
            Ley 24.449, incluyendo la firma digital del Director Técnico, sellos
            de tiempo y copia de respaldo segura. Cumplís con auditorías e
            inspecciones sin esfuerzo adicional.
          </li>
          <li>
            <strong>Órdenes de reparación estructuradas:</strong> Cada orden
            contiene campos claros para los datos del vehículo, titular,
            repuestos utilizados, observaciones y estado final. Esto asegura
            trazabilidad completa y una correcta entrega del comprobante al
            cliente.
          </li>
          <li>
            <strong>Integración contable(opcional):</strong> Exportá los datos
            directamente a tu sistema contable como Tango, Bejerman u otro ERP,
            evitando la doble carga de información y acelerando la facturación.
          </li>
          <li>
            <strong>Adaptable a todo tipo de taller:</strong> Desde mecánica
            general hasta electricidad o alineación, Logic‑TR se adapta gracias
            a su sistema de configuración basado en el Anexo K, mostrando solo
            lo necesario según tu especialidad.
          </li>
          <li>
            <strong>Seguridad y control de acceso:</strong> Usuarios con
            permisos personalizados, cifrado opcional y base de datos
            centralizada local o en red. Garantizá privacidad, respaldo y
            control de cada acción realizada.
          </li>
          <li>
            <strong>Compatibilidad total:</strong> Funciona de forma nativa en
            Windows 10 y 11 (64 bits), sin necesidad de máquinas virtuales.
            Puede instalarse tanto en una PC local como en un servidor interno
            del taller.
          </li>
        </ul>

        {/* Módulos */}
        <h3 className="mt-12 text-2xl font-semibold text-primary-hover">
          Módulos incluidos
        </h3>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 text-text-muted">
          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={clientsIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Clientes
            </h4>
            <small className="text-sm text-center">
              Presupuestos, historial y gestión completa de órdenes de
              reparación.
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
              Facturación de proveedores, historial de insumos y gestión de
              stock.
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
              Facturación, gestión financiera, vehículos y proveedores.
            </small>
          </div>

          <div className="flex flex-col items-center p-4 rounded-md border shadow bg-surface/25 border-surface">
            <img
              src={maintenanceIMG}
              alt="Ventas Image"
              className="mx-auto w-24 md:w-28 lg:w-32"
            />
            <h4 className="mt-2 text-base font-bold text-center text-text-main md:text-lg lg:text-xl">
              Órdenes de Reparación
            </h4>
            <small className="text-sm text-center">
              Seguimiento completo de cada vehículo, desde el ingreso hasta la
              entrega.
            </small>
          </div>
        </div>

        <div className="grid gap-4 items-start mx-auto mt-12 max-w-7xl lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col items-center">
            <h3 className="mt-12 text-2xl font-semibold text-primary-hover">
              Valor añadido
            </h3>
            <ol className="flex flex-col items-start mt-5 w-full list-disc list-inside">
              <li className="font-medium text-success">
                Cumplís con la ley sin complicaciones.
              </li>
              <li className="font-medium text-success">
                Organizás todo el taller en un solo lugar.
              </li>
              <li className="font-medium text-success">
                Evitás errores administrativos y ahorrás tiempo.
              </li>
              <li className="font-medium text-success">
                Escalable, seguro y adaptable a cualquier tipo de taller.
              </li>
            </ol>
            <p className="mt-4 italic leading-relaxed text-text-muted">
              Logic-TR digitaliza tu taller, elimina el papeleo, agiliza
              auditorías y crece con vos. Siempre actualizado, con soporte y
              mejoras constantes para que trabajes sin complicaciones.
            </p>
          </div>

          {/* Imagen */}
          <div className="overflow-hidden w-full h-auto rounded-lg">
            <img
              src={workshopIMG}
              alt="Dashboard de reportes Logic-T"
              className="object-cover mx-auto w-full rounded-lg max-w-96"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
