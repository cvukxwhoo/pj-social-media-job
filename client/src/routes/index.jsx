import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import HeaderOnly from '../components/Layout/HeaderOnly/index.jsx';
import InfoUser from '../pages/InfoUser/InfoUser.jsx';
import Employers from '../pages/Employers/index.jsx';
import Register from '../pages/Register/index.jsx';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/personal-info', component: InfoUser },
  { path: '/employer/details', component: Employers, layout: HeaderOnly },
];

export { publicRoutes };
