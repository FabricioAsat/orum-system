import { Link } from "react-router-dom";
import { PageContainer } from "@components/PageContainer";

export const NotFound = () => {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl text-error">
          Error 404
        </h2>

        <p className="text-base font-bold md:text-lg lg:text-xl">
          Page not found
        </p>

        <nav className="flex flex-col items-center mt-10">
          <p>La ruta a la que intentas acceder no existe.</p>
          <Link to={"/"} className="px-2 py-1 font-bold text-link">
            Go home
          </Link>
        </nav>
      </div>
    </PageContainer>
  );
};
