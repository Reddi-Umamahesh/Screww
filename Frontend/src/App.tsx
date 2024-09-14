// src/App.tsx
import React from "react";
import Navbar from "./components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import path from "path";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/profile";
import ServiceDescription from "./components/ServiceDescription";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Services",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <ServiceDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
