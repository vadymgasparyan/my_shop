import React from 'react';

import {Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from '../pages/Main';
import Admin from '../pages/Admin';
import Login from "../pages/Login";

const history = createBrowserHistory();

const Router = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/login" component={Login} />
        {/*<Route component={NotFound} />*/}
    </Switch>
);

export default Router;
