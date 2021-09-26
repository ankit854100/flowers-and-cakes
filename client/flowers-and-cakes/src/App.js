import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useDispatch} from "react-redux";

import Admin from "./components/admin/Admin";
import ProductDetails from './components/home/ProductDetails';
import {Switch, Route} from 'react-router-dom';
import CakeContainer from './components/items/CakeContainer';
import FlowerContainer from './components/items/FlowerContainer';
import Homepage from './components/Homepage';

import {getFlowers, getCakes} from "./redux/items/actionContainer"
import UserDetails from './components/user/UserDetails';

import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import ForgotPassword from './components/authentication/ForgetPassword';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCakes());
      dispatch(getFlowers());
      
  }, [dispatch])

  return (
        <div className="App">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/cake-items" component={CakeContainer} />
            <Route path="/flower-items" component={FlowerContainer} />
            <Route path="/product-details" component={ProductDetails}/>
            <Route path="/user-details" component={UserDetails} />
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
  );
}


export default App;