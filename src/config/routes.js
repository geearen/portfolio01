import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  )
}

export default Home;