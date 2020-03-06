import React, { useState, useEffect } from 'react'

function Cart() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getCartFromLocalStorage() {
    // 開啟載入指示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || []

    console.log(JSON.parse(newCart))

    // 設定資料
    setMycart(JSON.parse(newCart))
  }

  //   async function updateTotalToLocalStorage(value) {
  //     // 開啟載入指示
  //     setDataLoading(true)

  //     const newTotal = +total + value
  //     localStorage.setItem('total', newTotal)

  //     // 設定資料
  //     setTotal(newTotal)
  //   }

  // 一開始就會開始載入資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)

    let newMycartDisplay = [...mycartDisplay]
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      const index = newMycartDisplay.findIndex(
        value => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        console.log('findindex', index)
        newMycartDisplay[index].amount++
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { amout: 1, ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <ul className="list-group">
        <li className="list-group-item">產品/數量/單價</li>
      </ul>
      <h3>總價：</h3>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default Cart
