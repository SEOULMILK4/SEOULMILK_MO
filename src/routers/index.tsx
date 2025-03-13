import LoginPage from "@/pages/LoginPage";
import UploadPage from "@/pages/UploadPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CompletePage from "@/pages/CompletePage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "upload", element: <UploadPage /> },
      {
        path: "complete",
        element: <CompletePage />,
      },
    ],
  },
]);
