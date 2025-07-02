import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { navLinks } from "./menuData";

export const HeaderDesktop = () => {
  return (
    <div className="hidden items-center mx-auto max-w-7xl h-16 select-none bg-background lg:flex">
      <Logo />

      <nav className="hidden gap-x-6 justify-center items-center px-4 mx-auto h-full font-medium lg:flex">
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
