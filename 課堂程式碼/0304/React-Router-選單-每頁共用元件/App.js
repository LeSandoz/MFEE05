import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <>
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </Switch>
      </>
    </Router>
  )
}

export default App
