import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from './pages/login/index'
import Main from './pages/main/index'
import MyGames from './pages/myGames/index'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Login/>} />
      <PrivateRoute exact path="/main" component={() => <Main/>}/>
      <PrivateRoute exact path="/mygames" component={() => <MyGames/>}/>

    </Switch>
  </BrowserRouter>
);

export default Routes;