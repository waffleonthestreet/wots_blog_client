// assets
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// constant
const icons = {
  DashboardIcon,
  AssessmentIcon, LocalGroceryStoreIcon
};

const menuItems = {
  items: [
    {
      id: 'application',
      title: "application",
      type: 'group',
      children: [
        {
          id: 'CUSTOMER',
          title: "PROFILE",
          type: 'collapse',
          icon: icons.LocalGroceryStoreIcon,
          children: [
            {
              id: 'profile',
              title: "주인장 프로필",
              url: '/profile',
              type: 'item',
            },

          ]
        }, {
          id: 'TEST',
          title: "ARTICLES",
          type: 'collapse',
          icon: icons.LocalGroceryStoreIcon,
          children: [
            {
              id: '3',
              title: "Database",
              type: 'item',
              url: '/category/3/articles',
            },
            {
              id: '4',
              title: "Programming",
              type: 'item',
              url: '/category/4/articles',
            },
            {
              id: '5',
              title: "DevOps",
              type: 'item',
              url: '/category/5/articles',
            },
          ]
        }
      ]
    }]
};

export default menuItems;
