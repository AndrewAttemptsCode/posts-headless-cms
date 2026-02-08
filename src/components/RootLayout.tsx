import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        header content
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer content
      </footer>
    </div>
  );
};

export default RootLayout;