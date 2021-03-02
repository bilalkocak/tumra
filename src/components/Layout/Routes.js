import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ROUTES as routes} from "../../constant";


const Routes = () => {

    return (
        <Switch>
            {
                routes.map((route, index) => {
                    return (
                        <Route key={index} exact={true} component={route.component} path={route.path}/>
                    )
                })
            }
        </Switch>
    );
};

export default Routes;
