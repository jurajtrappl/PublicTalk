import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

// check for token to keep user logged in
if (localStorage.jwtToken) {
  // set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // decode token and get user info and exp
  const decoded = jwt_decode(token);

  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000; // ms
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());

    // redirect to login
    window.location.href = './login';
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
