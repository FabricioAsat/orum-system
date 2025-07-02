import { Outlet } from "react-router-dom";

import { HeaderDesktop } from "@/components/header/HeaderDesktop";
import { HeaderMobile } from "@/components/header/HeaderMobile";

export const DefaultLayout = () => {
  return (
    <div className="p-2">
      <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-border md:border-0">
        <HeaderMobile />
        <HeaderDesktop />
      </header>
      <main className="max-w-7xl mx-auto mt-16">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
