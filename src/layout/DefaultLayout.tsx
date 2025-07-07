import { Outlet } from "react-router-dom";

import { HeaderDesktop } from "@/components/header/HeaderDesktop";
import { HeaderMobile } from "@/components/header/HeaderMobile";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const DefaultLayout = () => {
  return (
    <div className="py-2">
      <header className="fixed top-0 left-0 z-50 w-full border-b-2 border-border lg:border-0">
        <HeaderMobile />
        <HeaderDesktop />
      </header>

      <ScrollToTop />
      <main className="mx-auto mt-16 max-w-7xl">
        <Outlet />
      </main>

      <footer className="mx-auto mt-10 w-full max-w-7xl text-center border-t border-border">
        <Footer />
      </footer>
    </div>
  );
};
