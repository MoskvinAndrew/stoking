import React, { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Route {
    link: string
    title: string
    exact: boolean
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

const ManagerHome = React.lazy (() => import("modules/Manager/ManagerHome"));
const ManagerProfile = React.lazy (() => import("modules/Manager/ManagerProfile"));

const basePath = '/manager';

export const ManagerRoutes: Array<Route> = [
    {
        link: basePath,
        title: 'Home',
        exact: true,
        component: ManagerHome,
    },
    {
        link: basePath,
        title: `${basePath}/profile`,
        exact: false,
        component: ManagerProfile,
    }
];
