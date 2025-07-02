import logoIMG from "@assets/logo-orum.jpg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="h-full">
      <img
        src={logoIMG}
        alt="Logo Orum System"
        className="h-full grayscale hover:grayscale-0 cursor-pointer max-h-16"
      />
    </Link>
  );
};
