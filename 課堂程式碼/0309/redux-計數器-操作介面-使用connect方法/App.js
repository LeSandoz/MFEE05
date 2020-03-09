import React from 'react'
import { connect } from 'react-redux'

function App(props) {
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

const mapStateToProps = store => {
  return { total: store.counter }
}

export default connect(mapStateToProps)(App)
