import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Admin from "./components/admin/Admin";
import store from './redux/store';
import Signup from './components/authentication/Signup';

import { AuthProvider } from "./context/AuthContext";
import Login from './components/authentication/Login';
import ForgotPassword from './components/authentication/ForgetPassword';

function App() {

  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Admin}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;