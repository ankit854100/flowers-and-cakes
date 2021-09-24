import React from 'react';
import ProductDetails from './component/client/productDetails';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/client/Header';
import Footer from './component/client/Footer';
import HomeCakes from './component/client/homeCakes';
import HomeFlowers from './component/client/homeFlowers';
import './App.css';
import Carosel from './component/client/Carousel';
//import { Carousel } from 'bootstrap';




class App extends React.Component {
render() {
    return  (
      <div>
      
      <Header/> <hr/>
      <Carosel/> <hr/>
      <HomeCakes/>
      <HomeFlowers/><hr/>
      <Footer/><hr/>
      <ProductDetails/>

      
      </div>
    );
  }
}
export default App;