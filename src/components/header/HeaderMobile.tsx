import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./menuData";
import { AnimatePresence, motion } from "framer-motion";

import downIMG from "@assets/svg/down.svg";
import hambOnIMG from "@assets/svg/hamb-on.svg";
import hambOffIMG from "@assets/svg/hamb-off.svg";
import { Logo } from "./Logo";

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="p-4 text-white select-none lg:hidden bg-background">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer hover:brightness-75"
        >
          <img
            src={open ? hambOffIMG : hambOnIMG}
            alt="Expand"
            className={`w-10 h-10 transition-transform duration-200`}
          />
        </button>
        <Logo />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-4"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex justify-start items-center px-4 py-2 w-full font-bold transition-colors duration-200 cursor-pointer hover:text-placeholder"
                    >
                      {link.label}
                      <img
                        src={downIMG}
                        alt="Expand"
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex flex-col gap-1 mt-2 ml-4 border-l border-border"
                        >
                          {link.dropdown.map((item) => (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              onClick={() => {
                                setOpen(false);
                                setActiveDropdown(null);
                              }}
                              className={({ isActive }) =>
                                `${
                                  isActive
                                    ? "text-link"
                                    : "hover:text-placeholder"
                                } flex items-center gap-2 px-4 py-1 font-bold transition-colors duration-200`
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
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to!}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-link" : "hover:text-placeholder"
                      } block px-4 py-2 font-bold transition-colors duration-200`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
