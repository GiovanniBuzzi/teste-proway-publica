import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from './pages/login/index'
import Main from './pages/main/index'
import Games from './pages/games/index'
import Records from './pages/records/index'
import GeneralRecords from './pages/generalRecords/index'
import SignUp from './pages/signUp/index'
import Team from './pages/teams/index'

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
      <Route exact path="/sign-up" component={() => <SignUp/>} />
      <PrivateRoute exact path="/main" component={() => <Main/>}/>
      <PrivateRoute exact path="/games" component={() => <Games/>}/>
      <PrivateRoute exact path="/records" component={() => <Records/>}/>
      <PrivateRoute exact path="/general-records" component={() => <GeneralRecords/>}/>
      <PrivateRoute exact path="/teams" component={() => <Team/>}/>
      <Route path="/*" component={() => <Redirect to path='/'>{alert('Page Not Found')}</Redirect>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;