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
        <div className="container">
          <Menu />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/** 定義product路徑中的params的物件屬性名稱，問號是可有可無的意思 */}
            <Route path="/product/:type?/:id?/">
              <Product />
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
