import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Add Expense',
    icon: 'mdi mdi-book-open',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/add-expense',
    title: 'View Expenses',
    icon: 'mdi mdi-chart-histogram',
    class: '',
    extralink: false,
    submenu: []
  },
  
  
];
