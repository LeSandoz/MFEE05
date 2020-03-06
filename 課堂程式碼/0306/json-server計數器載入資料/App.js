import React, { useState, useEffect } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [dataHasLoaded, setDataHasLoaded] = useState(false)

  async function getTotalFromServer() {
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    await setTotal(data.total)
    // 開啟載入
    await setDataHasLoaded(true)
  }

  useEffect(() => {
    setTimeout(() => {
      getTotalFromServer()
    }, 3000)
  }, [])

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
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
    </>
  )

  return (
    <>
      <div className="container">{!dataHasLoaded ? loading : display}</div>
    </>
  )
}

export default App
