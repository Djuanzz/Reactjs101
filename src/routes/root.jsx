import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home.jsx";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/signup.jsx";
import NotFound from "../pages/notfound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
