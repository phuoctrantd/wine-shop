import React from 'react'
import { Route, Switch,BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import {path} from '../constants/path'
function Routes() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path={path.home} exact>
            <Home></Home>
        </Route>
        
        </Switch>
    </BrowserRouter>
  )
}

export default Routes