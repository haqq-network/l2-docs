import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search/',
    component: ComponentCreator('/search/', '21e'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'a13'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'cb5'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '64f'),
            routes: [
              {
                path: '/docs/category/l2-network/',
                component: ComponentCreator('/docs/category/l2-network/', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/l2-network/',
                component: ComponentCreator('/docs/l2-network/', 'fca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/l2-network/contractaddress/',
                component: ComponentCreator('/docs/l2-network/contractaddress/', '5e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
