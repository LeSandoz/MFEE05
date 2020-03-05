import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { Route, withRouter, Link, Switch, matchPath } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  //console.log(matchPath(props.match.pathname, props))

  // 利用location.search來取得query string
  //console.log('props.location.search', props.location.search)
  // 利用內建的API來得到URLSearchParams物件 (注意IE完全不相容，要改用query-string模組)
  //const searchParams = new URLSearchParams(props.location.search)

  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <Banner pagename="產品分類" />
      <Breadcrumb />
      <ul>
        <li>
          <Link to={`${url}/pc`}>PC</Link>
        </li>
        <li>
          <Link to={`${url}/mobile`}>手機</Link>
        </li>
        <li>
          <Link to={`${url}/notebook`}>筆電</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ProductCategory)
