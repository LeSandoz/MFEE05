import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Student from './pages/Student'

import { data } from './data/index'

function App() {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/student">學生詳細頁</Link>
          </li>
        </ul>
        <div className="container">
          <Switch>
            <Route path="/student/:id?">
              <Student />
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
