import React from 'react'
// 導入高階元件的方法
import { connect } from 'react-redux'

// 全部綁定action creators
// 導入所有的action creators變成一個物件值
//import * as actionCreators from './actions/index'

// 部份綁定action creators
import { bindActionCreators } from 'redux'
import { addValue } from './actions/index'

function App(props) {
  //觀察由connect可以在這個元件得到什麼
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          // 使用時直接套用action creator，會幫忙建立action物件與dispatch
          props.addValue(1)
        }}
      >
        +1
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
          props.addValue(5)
        }}
      >
        +10
      </button>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return { total: store.counter }
}

// const mapDispatchToProps = null

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addValue }, dispatch)
}

// 高階元件的套用
// 第二個參數用actionCreators
export default connect(mapStateToProps, mapDispatchToProps)(App)
