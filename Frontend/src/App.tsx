// src/App.tsx
import React from "react";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
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
    path: "/services",
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
