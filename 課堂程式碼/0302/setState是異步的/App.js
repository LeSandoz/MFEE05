import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
			//先計算好total值
            const newTotal = this.state.total + 10
			
			//再傳入setState
            this.setState({ total: newTotal })

            //利用新的state值進行運算或取到最後的改變值
            console.log(newTotal)
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -
        </button>
      </>
    )
  }
}

export default App
