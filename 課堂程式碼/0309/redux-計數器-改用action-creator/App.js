import React from 'react'
// 導入高階元件的方法
import { connect } from 'react-redux'
import * as actionCreators from './actions/index'

function App(props) {
  //觀察由connect可以在這個元件得到什麼
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          props.addValue(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.minusValue(1)
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          props.addValue(1)
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          props.minusValue(5)
        }}
      >
        -5
      </button>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return { total: store.counter }
}

// const mapDispatchToProps = null

// 高階元件的套用
export default connect(mapStateToProps, actionCreators)(App)
