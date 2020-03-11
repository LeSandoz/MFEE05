import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

// 頁面
import Home from './pages/Home'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

// 選單
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
