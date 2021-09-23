import React from 'react';
import {Navbar} from './navbar';
import {Header} from './Header';
import {Footer} from './Footer';
import {CFS} from './Cakes_Flowers';
import {MainContent} from './productDetails'
import './App.css';




class App extends React.Component {
render() {
    return  (
      <div>
      <Navbar/>
      <Header/>
      <CFS/>
      <MainContent/>
      <Footer/>
      </div>
    );
  }
}
export default App;