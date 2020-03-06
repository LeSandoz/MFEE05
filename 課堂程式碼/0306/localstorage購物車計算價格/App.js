import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import Product from './pages/Product'

import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route path="/cart">
              <ProductList />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route exact path="/">
              <Cart />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
