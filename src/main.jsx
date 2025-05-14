import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./layouts/Root";
import HabitDetails from "./pages/HabitDetails";
import MyHabits from "./pages/MyHabits";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "habit-details/:id",
        element: <HabitDetails />,
        loader: () => fetch("/data.json")
      },
      {
        path: "my-habits",
        Component: MyHabits,
        loader: () => fetch("/data.json")
      },
      {
        path: "blogs",
        element: <Blogs />
      }
    ]
  },
]);





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
