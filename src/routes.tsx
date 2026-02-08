import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default routes;