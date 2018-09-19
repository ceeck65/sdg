import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  {
    path: '/home',
    title: 'Home',
    icon: 'mdi mdi-home',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'mdi mdi-gauge',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/cards',
    title: 'Card',
    icon: 'mdi mdi-blur-radial',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }
];
