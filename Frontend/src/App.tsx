// src/App.tsx
import React from "react";
import Navbar from "./components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./components/auth/login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";

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
 
]);
const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
