import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import FooterCredits from "./FooterCredits";

const RootLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-gray-100 dark:bg-gray-700">
      <header>
        <Logo />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterCredits />
      </footer>
    </div>
  );
};

export default RootLayout;
