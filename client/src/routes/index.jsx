import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import HeaderOnly from "../components/Layout/HeaderOnly/index.jsx";
import Employers from "../pages/Employers/index.jsx";

const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/login", component: Login },
  { path: "/employers", component: Employers, layout: HeaderOnly },
];

export { publicRoutes };
