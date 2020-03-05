import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { withRouter } from 'react-router-dom'

function Product(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  console.log('props.match.params', props.match.params)

  // 利用location.search來取得query string
  console.log('props.location.search', props.location.search)
  // 利用內建的API來得到URLSearchParams物件 (注意IE完全不相容，要改用query-string模組)
  const searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <Banner pagename="產品" />
      <Breadcrumb />
      <h1>用URL Params</h1>
      <h3>產品類型 = {props.match.params.type}</h3>
      <h3>產品id = {props.match.params.id}</h3>
      <hr />
      <h1>用Query String(Search Params/Query Params)</h1>
      <h3>產品類型 = {searchParams.get('type')}</h3>
      <h3>產品id = {searchParams.get('id')}</h3>
    </>
  )
}

export default withRouter(Product)
