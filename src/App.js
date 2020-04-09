import React from 'react';

import './App.css';
import Home from './compound/Home'
import Homep from "./compound/Homepage";
import {Provider } from 'react-redux';
import store from "./store";



function App() {

    return (
        <Provider store={store}>



<div className='App'>

    <Home/>
    <Homep/>

</div>
        </Provider>

    );

};


export default App;
