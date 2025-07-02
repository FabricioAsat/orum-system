import logoIMG from "@assets/logo-orum.jpg";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <nav className="w-full h-full lg:w-auto">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "grayscale-0" : "grayscale"}`
        }
      >
        <img
          src={logoIMG}
          alt="Logo Orum System"
          className="px-4 mx-auto h-full max-h-10 cursor-pointer lg:max-h-16 lg:mx-0 lg:py-2"
        />
      </NavLink>
    </nav>
  );
};
