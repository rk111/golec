import Dashboard from '../components/dashboard/dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyIcon from '@mui/icons-material/Money';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AddEditPartTime from '../components/parttime/AddEditPartTime';
import AddEditCareer from '../components/careers/AddEditCareer';
import AddEditBiz from '../components/adminBiz/AddEditBiz';
import LsPartTime from '../components/parttime/LsPartTime';
import AddEditUserBiz from '../components/userCreatedBiz/AddEditUsrBiz';
import LsBiz from '../components/adminBiz/lsbiz';
import LsUserBiz from '../components/userCreatedBiz/lsusrbiz';
import ViewMembers from '../components/members/viewmembers';
import CareerDataTable from '../components/careers/lsCareer';
import Bonuses from '../components/Bonuses/bonuses';
import Withdrawal from '../components/withdrawal/withdrawal';
import MarketDataTable from '../components/market/lsmarket';

const routes = {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      layout: true,
      icon: HomeIcon,
      component: Dashboard,
    },
    {
      path: '/',
      name: 'Part Time',
      type: 'submenu',
      icon: AppsIcon,
      badge: {
        type: 'primary',
        value: '5',
      },
      children: [
        {
          path: 'part-time',
          name: 'List',
          component: LsPartTime,
        },
        {
          path: 'create-part-time',
          name: 'Add',
          component: AddEditPartTime,
        },
      ],
    },
    {
      path: '/',
      name: 'Admin Biz',
      type: 'submenu',
      icon: PeopleIcon,

      children: [
        {
          path: 'add-edit-biz',
          name: 'Add',
          component: AddEditBiz,
        },
        {
          path: 'add-edit-biz-list',
          name: 'List',
          component: LsBiz,
        },
      ],
    },
    {
      path: '/',
      name: 'User Created Biz',
      type: 'submenu',
      icon: PeopleIcon,

      children: [
        {
          path: 'add-edit-user-biz',
          name: 'Add',
          component: AddEditUserBiz,
        },
        {
          path: 'add-edit-user-biz-list',
          name: 'List',
          component: LsUserBiz,
        },
      ],
    },
    {
      path: '/',
      name: 'Career',
      type: 'submenu',
      icon: TimelineIcon,

      children: [
        {
          path: 'add-edit-career',
          name: 'Add',
          component: AddEditCareer,
        },
        {
          path: 'list-career',
          name: 'List',
          component: CareerDataTable,
        },
      ],
    },
    {
      path: '/view-market',
      name: 'View Market',
      type: 'link',
      layout: true,
      icon: StackedLineChartIcon,
      component: MarketDataTable,
    },
    {
      path: '/view-members',
      name: 'View Members',
      type: 'link',
      layout: true,
      icon: PersonSearchIcon,
      component: ViewMembers,
    },
    {
      path: '/view-withdrawal',
      name: 'Withdrawal',
      type: 'link',
      layout: true,
      icon: MoneyIcon,
      component: Withdrawal,
    },
    {
      path: '/view-bonues',
      name: 'Bonus',
      type: 'link',
      layout: true,
      icon: PaymentIcon,
      component: Bonuses,
    },
  ],
};

export default routes;
