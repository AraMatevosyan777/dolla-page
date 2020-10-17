import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages'
import SignInPage from './pages/signin'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={()=> <Home/>}/>
        <Route exact path='/signin' render={()=> <SignInPage/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
