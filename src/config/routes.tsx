import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Driver from 'pages/Driver';
import Pickup from 'pages/Pickup';

import { ReactComponent as IconHome } from 'assets/icons/home.svg';
import { ReactComponent as IconDriver } from 'assets/icons/user.svg';
import { ReactComponent as IconPickup } from 'assets/icons/calendar.svg';

export const menuRoutes = [
  {
    name: 'Beranda',
    path: '/',
    component: Home,
    icon: <IconHome />,
  },
  {
    name: 'Driver Management',
    path: '/driver',
    component: Driver,
    icon: <IconDriver />,
  },
  {
    name: 'Pickup',
    path: '/pickup',
    component: Pickup,
    icon: <IconPickup />,
  },
];

const Routes = () => {
  return (
    <Switch>
      {menuRoutes.map((route) => (
        <Route key={route.name} {...route} exact />
      ))}
    </Switch>
  );
};

export default Routes;
