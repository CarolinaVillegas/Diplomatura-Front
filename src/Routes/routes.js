import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../services/auth.service';

import Login from '../components/Login/Login';//import Logout from './components/Logout';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/logout" component={Logout} /> */}
        </Switch>
    </Router>
);

export default Routes;