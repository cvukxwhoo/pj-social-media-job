import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import HeaderOnly from "../components/Layout/HeaderOnly/index.jsx";
<<<<<<< HEAD
import InfoUser from "../pages/InfoUser/InfoUser.jsx";
=======
import Employers from "../pages/Employers/index.jsx";
>>>>>>> b1ee30207418b5b3aa9c981a2515ee47b34721f6

const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/login", component: Login },
<<<<<<< HEAD
  { path: "/personal-info", component: InfoUser },
=======
  { path: "/employers", component: Employers, layout: HeaderOnly },
>>>>>>> b1ee30207418b5b3aa9c981a2515ee47b34721f6
];

export { publicRoutes };
