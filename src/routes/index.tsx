import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layout/DefaultLayout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { NotFound } from "@/pages/NotFound";
import { LogicFamily } from "@/pages/LogicFamily";
import { Contact } from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // se renderiza 1 vez
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "logic-family", element: <LogicFamily /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
