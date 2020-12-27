import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/singup";
import Home from "./Components/home";


const Routes = () => (
    <Switch>
    
    <Route exact path = "/login" component={Login} />
    <Route exact path = "/signup" component={Signup} />
    <Route exact path = "/" component={Home} />
    </Switch>
);

export default Routes;