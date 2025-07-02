import logoIMG from "@assets/logo-orum.jpg";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <nav className="h-full w-full md:w-auto">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "grayscale-0" : "grayscale"}`
        }
      >
        <img
          src={logoIMG}
          alt="Logo Orum System"
          className="h-full cursor-pointer max-h-10 md:max-h-16 mx-auto md:mx-0 md:py-2 px-4"
        />
      </NavLink>
    </nav>
  );
};
