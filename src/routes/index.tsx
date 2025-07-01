import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layout/DefaultLayout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // se renderiza 1 vez
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
