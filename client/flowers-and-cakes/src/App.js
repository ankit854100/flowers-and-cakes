import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from "react-redux";

import Admin from "./components/admin/Admin";
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
        <div className="App">
          <Admin />
        </div>
    </Provider>
  );
}

export default App;