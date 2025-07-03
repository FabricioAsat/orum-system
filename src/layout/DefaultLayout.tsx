import { Outlet } from "react-router-dom";

import { HeaderDesktop } from "@/components/header/HeaderDesktop";
import { HeaderMobile } from "@/components/header/HeaderMobile";

export const DefaultLayout = () => {
  return (
    <div className="py-2">
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#5a5a5e2e_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f70a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

      <header className="fixed top-0 left-0 z-50 w-full border-b-2 border-border md:border-0">
        <HeaderMobile />
        <HeaderDesktop />
      </header>
      <main className="mx-auto mt-16 max-w-7xl">
        <Outlet />
      </main>

      <footer className="mt-10 w-full text-center">Footer</footer>
    </div>
  );
};
