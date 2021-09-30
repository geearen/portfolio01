import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Splash from '../pages/Splash';
import Home from '../pages/Home';

function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;