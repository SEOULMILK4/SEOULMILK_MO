import LoginPage from "@/pages/LoginPage";
import UploadPage from "@/pages/UploadPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "main", element: <UploadPage /> }],
  },
]);
