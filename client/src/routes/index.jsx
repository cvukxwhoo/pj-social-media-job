import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import HeaderOnly from "../components/Layout/HeaderOnly/index.jsx";
import InfoUser from "../pages/InfoUser/InfoUser.jsx";

const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/login", component: Login },
  { path: "/personal-info", component: InfoUser },
];

export { publicRoutes };
