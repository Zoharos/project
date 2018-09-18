import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import injectSheet from 'react-jss';
import HomePage from './home.js';
import {PrivateRoute,NavBar} from './components.js'

const Index = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/real_estate" component={NavBar} />
      </Switch>
    </div>
  </BrowserRouter>
)
ReactDOM.render(<Index />,document.getElementById('app'));