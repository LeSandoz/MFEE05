import React from 'react'

//模擬從伺服器端取到資料
function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    // product = { name: string, price: numbers }
    this.state = {
      products: [],
    }
    console.log('constructor')
  }

  // 元件出現在網頁上才會呼叫這個方法
  componentDidMount() {
    const data = getDataFromServer()
    this.setState({ products: [...data] })
    console.log('componentDidMount')
  }

  render() {
    console.log('render')

    return (
      <>
        <ul>
          {this.state.products.map((value, index) => {
            return (
              <li key={index}>
                名稱:{value.name} / 價格{value.price}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
