import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/posts"} replace />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

export default routes;
