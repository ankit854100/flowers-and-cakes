import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider, useDispatch} from "react-redux";

import Admin from "./components/admin/Admin";
import store from './redux/store';
import ProductDetails from './components/home/ProductDetails';
import NavBar from "./components/home/NavBar";
import Footer from './components/home/Footer';
import HomeCakes from './components/home/CakesCategory';
import HomeFlowers from './components/home/FlowersCategory';
import {Switch, Route} from 'react-router-dom';
import CakeContainer from './components/items/CakeContainer';
import FlowerContainer from './components/items/FlowerContainer';
import Homepage from './components/Homepage';

import {getFlowers, getCakes} from "./redux/items/actionContainer"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCakes());
      dispatch(getFlowers());
      
  }, [dispatch])

  return (
    // <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/cake-items" component={CakeContainer} />
            <Route path="/flower-items" component={FlowerContainer} />
            <Route path="/product-details" component={ProductDetails}/>
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
    // </Provider>
  );
}


export default App;