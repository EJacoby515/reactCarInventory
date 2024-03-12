import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import About from '../pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}
const routes: RouteType[] = [
    {
        path: '',
        component: Home,
        name: 'Home Screen',
    },
    {
        path: '/inventory',
        component: Inventory,
        name: 'Inventory',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    }
];

export  default routes