import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export function Modal({ show, onClose, title, message }: ModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-start p-6 w-full max-w-md rounded-xl border shadow-lg bg-surface text-text-main border-input-border"
          >
            {title && (
              <h3 className="mb-2 text-xl font-bold text-error">{title}</h3>
            )}
            <p className="mb-4 text-text-muted text-start">{message}</p>
            <div className="flex justify-end w-full">
              <button
                onClick={onClose}
                className="px-4 py-2 font-semibold rounded-md transition-colors duration-200 cursor-pointer bg-primary text-surface hover:bg-primary-hover"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
