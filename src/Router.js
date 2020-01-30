import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Edit from './pages/Edit';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const RouterMap = () => {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/detail">
                <Detail/>
            </Route>
            <Route exact path="/edit">
                <Edit/>
            </Route>
        </Switch>
    </Router>
}

export default RouterMap;
