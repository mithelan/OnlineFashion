import React from 'react';
import Cart from './compound/Cart';
import './App.css';
import Home from './compound/Home'
import Homep from "./compound/Homepage";
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Checkout from "./compound/Checkout";





function App() {
    return (
        <Provider store={store}>
            <div className='App'>
<BrowserRouter>

    <Home/>
    <Switch>
    <Route exact path ='/' component={Homep}/>

    <Route path ='/cart' component={Cart}/>
        <Route path ='/Checkout' component={Checkout}/>
</Switch>



</BrowserRouter>

            </div>

        </Provider>


    );

};


export default App;
