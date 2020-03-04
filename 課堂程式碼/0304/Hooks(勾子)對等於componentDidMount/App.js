import React, { useState, useEffect } from 'react'

function getDataFromServer() {
  return [
    { name: 'iphone x', price: 15000 },
    { name: 'book', price: 200 },
  ]
}

function App(props) {
  const [products, setProducts] = useState([])
  const [dataHasLoaded, setDataHasLoaded] = useState(false)

  // 與componentDidMount相等的勾子寫法
  useEffect(() => {
    // Your code here
    const data = getDataFromServer()
    setTimeout(() => {
      setProducts(data)
      setDataHasLoaded(true)
    }, 3000)
    console.log('componentDidMount')
  }, [])

  const loading = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  const dataList = (
    <ul>
      {products.map((value, index) => {
        return (
          <li key={index}>
            名稱:{value.name} / 價格{value.price}
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <div className="container">{!dataHasLoaded ? loading : dataList}</div>
    </>
  )
}

export default App
