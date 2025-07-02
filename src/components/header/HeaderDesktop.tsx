import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const HeaderDesktop = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center h-16 bg-background">
      <Logo />

      <Navbar />
    </div>
  );
};
