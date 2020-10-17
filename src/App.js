import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages'
import SignInPage from './pages/signin'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={()=> <Home/>}/>
        <Route exact path='/signin' render={()=> <SignInPage/>}/>
      </Switch>
    </HashRouter>
  )
}

export default App
