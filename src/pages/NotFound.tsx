import { Link } from "react-router-dom";
import { PageContainer } from "@components/PageContainer";

export const NotFound = () => {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center">
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link to={"/"}>Go home</Link>
      </div>
    </PageContainer>
  );
};
