import { Outlet } from "react-router-dom";

import { HeaderDesktop } from "@/components/header/HeaderDesktop";

export const DefaultLayout = () => {
  return (
    <div className="p-2">
      <header className="fixed top-0 left-0 w-full z-50">
        <HeaderDesktop />
      </header>
      <main className="max-w-7xl mx-auto mt-16">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
