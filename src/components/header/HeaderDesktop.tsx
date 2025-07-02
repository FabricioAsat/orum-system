import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { navLinks } from "./menuData";

export const HeaderDesktop = () => {
  return (
    <div className="max-w-7xl mx-auto items-center h-16 bg-background hidden md:flex">
      <Logo />

      <nav className="hidden md:flex items-center justify-center gap-x-10 mx-auto font-medium h-full px-4">
        {navLinks.map((link) => (
          <NavItem
            key={link.label}
            label={link.label}
            to={link.to}
            dropdown={link.dropdown}
          />
        ))}
      </nav>
    </div>
  );
};
