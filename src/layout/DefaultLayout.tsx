import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="">
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
