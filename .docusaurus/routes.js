import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '546'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '2da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'cab'),
    exact: true
  },
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
