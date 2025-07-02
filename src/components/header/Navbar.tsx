import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-10 mx-auto font-medium h-full px-4">
      <NavItem label="Home" to="/" />
      <NavItem label="About" to="/about" />
      <NavItem
        label="Services"
        dropdown={[
          { label: "Design", to: "/services/design" },
          { label: "Development", to: "/services/dev" },
          { label: "SEO", to: "/services/seo" },
        ]}
      />
      <NavItem label="Contact" to="/contact" />
    </nav>
  );
};
