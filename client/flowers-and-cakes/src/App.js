import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useDispatch, useSelector} from "react-redux";

import Admin from "./components/admin/Admin";
import ProductDetails from './components/home/ProductDetails';
import {Switch, Route} from 'react-router-dom';
import CakeContainer from './components/items/CakeContainer';
import FlowerContainer from './components/items/FlowerContainer';
import Homepage from './components/Homepage';

import {getFlowers, getCakes} from "./redux/items/actionContainer";
import { getAllUsers } from "./redux/users/actionContainer";
import UserDetails from './components/user/UserDetails';

import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import ForgotPassword from './components/authentication/ForgetPassword';
import { useAuth } from './context/AuthContext';
import HelpCenter from './components/HelpCenter';
import Cart from './components/user/Cart';
import SearchPage from './components/searchPage/SearchPage';



function App() {

  const dispatch = useDispatch();

  const { currentUser } = useAuth();

  const userDetails = useSelector(state => state.user.userDetails);

  useEffect(() => {
      dispatch(getCakes());
      dispatch(getFlowers());
      if(currentUser){
        dispatch(getAllUsers(currentUser.email));
      }
      
  }, [dispatch])

  return (
        <div className="App">
          <Switch>
            {!currentUser && <Route path="/signup" component={Signup} />}
            {!currentUser && <Route path="/login" component={Login} />}
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/cake-items" component={CakeContainer} />
            <Route path="/flower-items" component={FlowerContainer} />
            <Route path="/product-details" component={ProductDetails}/>
            <Route path="/user-details" component={UserDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/search" component={SearchPage} />
            <Route path="/help-center" component={HelpCenter} />
            {userDetails.isAdmin === true && <Route path="/admin" component={Admin} />}
            {/* <Route path="/admin" component={Admin} /> */}
            <Route exact path="/" component={Homepage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
  );
}

function PageNotFound(){
  return(
    <div>
      <div className="page_top">
        <img className="page404" src="https://miro.medium.com/max/5120/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt="page not  found"/>
      </div>
      <style jsx>{`
        .page_top{
          text-align: center;
        }
        .page404{
          width: 600px;
        }
      `}</style>
    </div>
  )
}


export default App;