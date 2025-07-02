import logoIMG from "@assets/logo-orum.jpg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="h-full w-full md:w-auto">
      <img
        src={logoIMG}
        alt="Logo Orum System"
        className="h-full grayscale hover:grayscale-0 cursor-pointer max-h-10 md:max-h-16 mx-auto md:mx-0 md:py-2"
      />
    </Link>
  );
};
