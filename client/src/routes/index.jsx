import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import HeaderOnly from "../components/Layout/HeaderOnly/index.jsx";
import InfoUser from "../pages/InfoUser/InfoUser.jsx";
import Employers from "../pages/Employers/index.jsx";
import Register from "../pages/Register/index.jsx";
import Profile from "../pages/Profile/index.jsx";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
  { path: "/personal-info", component: InfoUser, layout: HeaderOnly },
  { path: "/employer/details", component: Employers, layout: HeaderOnly },
  { path: "/profile", component: Profile, layout: HeaderOnly },
];

export { publicRoutes };
