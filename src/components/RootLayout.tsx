import { Outlet } from "react-router-dom";
import Logo from "./Logo";

const RootLayout = () => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] bg-gray-100 dark:bg-gray-700">
      <header>
        <Logo />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer content</footer>
    </div>
  );
};

export default RootLayout;
