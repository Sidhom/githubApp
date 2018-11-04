import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Users from '../../containers/users';
import Profile from '../Profile/Profile';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Users}/>
        <Route  path='/Profile/:login' component={Profile} />
      </Switch>
    </main>
  )
  
  export default Main
  