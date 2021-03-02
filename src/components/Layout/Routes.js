import React from 'react';
import {Route, Switch} from "react-router-dom";
import ServiceList from "../ServiceList/ServiceList";
import Service from "../Service/Service";

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}


const Routes = () => {
    const routes = [
        {
            path: "/",
            component: ServiceList
        },
        {
            path: "/service",
            component: Service,
            routes: [
                {
                    path: "/service/:id",
                    component: Service
                }
            ]
        }
    ];
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
};

export default Routes;
