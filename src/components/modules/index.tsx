import React from "react";
import {Route, Switch} from "react-router";

import {ManagerRoutes} from "routes/ManagerRoutes";
import {MarketplaceRoutes} from "routes/MarketplaceRoutes";

export const Root: React.FC = () => {
    return (
        <React.Suspense fallback = {<div> Загрузка ... </div>}>
            <Switch>
                {ManagerRoutes.map((page, index) =>
                    <Route
                        exact={page.exact}
                        path={page.link}
                        component={page.component}
                        key={index}
                    />)}

                {MarketplaceRoutes.map((page, index) =>
                    <Route
                        exact={page.exact}
                        path={page.link}
                        component={page.component}
                        key={index}
                    />)}

                <Route component={()=> <>Not Found!</>} />
            </Switch>
        </React.Suspense>
    );
};
