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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-surface text-text-main rounded-xl p-6 w-full max-w-md shadow-lg border border-input-border"
          >
            {title && (
              <h3 className="text-xl font-bold mb-2 text-error">{title}</h3>
            )}
            <p className="text-text-muted mb-4">{message}</p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-primary text-surface font-semibold rounded-md hover:bg-primary-hover cursor-pointer transition-colors duration-200"
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
