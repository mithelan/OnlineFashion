import React from 'react';
import Logo from './img/logo.PNG';
import './App.css';
import Navigation from "./component/navigator/Navigation";
import Login from "./component/user/login/Login";

import {
    BrowserRouter as Router,
     Switch,
     Route
} from 'react-router-dom';



function App() {

    return (

        <div>
            <Navigation/>
            <Router>
                <Switch>
                    <Route path="/login"><Login/></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Switch>
            </Router>
        </div>

    );

};


export default App;
