import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link to={"/"}>Go home</Link>
    </div>
  );
};
