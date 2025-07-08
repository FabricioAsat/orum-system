import logoIMG from "@assets/logo-orum.webp";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <nav className="flex justify-center items-center w-full h-full lg:w-auto">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "grayscale-0" : "grayscale"}`
        }
      >
        <img
          src={logoIMG}
          alt="Logo Orum System"
          className={`object-contain px-4 mx-auto h-full max-h-12 cursor-pointer min-h-10 lg:min-h-16 lg:mx-0 lg:py-2 lg:max-h-16`}
        />
      </NavLink>
    </nav>
  );
};
