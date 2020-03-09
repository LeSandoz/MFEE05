import React from 'react'
// 導入高階元件的方法
import { connect } from 'react-redux'

function App(props) {
  //觀察由connect可以在這個元件得到什麼
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: 'ADD_VALUE', value: 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: 'MINUS_VALUE', value: 1 })
        }}
      >
        -1
      </button>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return { total: store.counter }
}

// 高階元件的套用
export default connect(mapStateToProps)(App)
