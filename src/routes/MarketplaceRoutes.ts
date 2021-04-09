import React, { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Route {
    link: string
    title: string
    exact: boolean
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

const Home = React.lazy (() => import("modules/Marketplace/pages/Home"));
const Catalog = React.lazy (() => import("modules/Marketplace/pages/Catalog"));
const ItemCard = React.lazy (() => import("modules/Marketplace/pages/ItemCard"));

export const MarketplaceRoutes: Array<Route> = [
    {
        link: '/',
        title: 'Home',
        exact: true,
        component: Home,
    },
    {
        link: '/catalog',
        title: 'Catalog',
        exact: false,
        component: Catalog,
    },
  {
    link: '/itemCard',
    title: 'itemCard',
    exact: false,
    component: ItemCard,
  },
];
