import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

import downIMG from "@assets/svg/down.svg";

interface DropdownOption {
  label: string;
  to: string;
  icon?: ReactNode;
}

interface NavItemProps {
  label: string;
  to?: string;
  dropdown?: DropdownOption[];
}

export const NavItem = ({ label, to, dropdown }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-full flex items-center justify-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {to ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `${
              isActive ? "text-link" : "hover:text-placeholder"
            } px-4 py-2 font-bold transition-colors duration-200`
          }
        >
          {label}
        </NavLink>
      ) : (
        <span className="px-4 py-2 cursor-pointer font-bold flex items-center gap-x-1">
          {label} <img src={downIMG} alt="Down arrow" className="w-5 h-5" />
        </span>
      )}

      {/* Dropdown animado */}
      <AnimatePresence>
        {isOpen && dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full w-auto px-4 py-3 truncate bg-background shadow-xl rounded-md z-50"
          >
            {dropdown.map((item) => (
              <NavLink
                to={item.to}
                key={item.to}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-link" : "hover:text-placeholder"
                  } flex gap-x-2 items-center px-4 py-2 font-semibold transition-colors duration-200`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
