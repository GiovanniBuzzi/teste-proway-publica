import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

///// importação de serviço para autenticação de login
import { isAuthenticated } from "./services/auth.js";

//////// importação de paginas e componentes
import Login from './pages/login/index.js'
import Main from './pages/main/index.js'
import Games from './pages/games/index.js'
import Records from './pages/records/index.js'
import GeneralRecords from './pages/generalRecords/index.js'
import SignUp from './pages/signUp/index.js'
import Team from './pages/teams/index.js'


/////// Componente para validação de rota privada
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

///////Rotas da web app

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