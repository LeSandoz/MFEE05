import React, { useState } from 'react'
import Banner from '../components/Banner'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = () => {
    let error = false
    if (password1 !== password2) {
      error = true
      // alert('兩次密碼寫的不同')
    }

    setError(error)
    if (error) return

    const password = password1
    const userData = { name, email, username, password }
    sendRegisterDataToServer(userData, () => alert('成功註冊'))
  }

  async function sendRegisterDataToServer(userData, callback) {
    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    callback()
  }

  return (
    <>
      <>
        {error ? (
          <>
            <div class="alert alert-danger" role="alert">
              兩次密碼寫的不同
            </div>
          </>
        ) : (
          ''
        )}
        <div className="form-group">
          <label htmlFor="nameInput">姓名</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="請輸入姓名"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="請輸入Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="usernameInput">帳號</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="usernameInput"
            aria-describedby="emailHelp"
            placeholder="請輸入帳號"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">密碼</label>
          <input
            type="password"
            name="password1"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="請輸入密碼"
            onChange={e => setPassword1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">確認密碼</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="請再次輸入密碼"
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          送出
        </button>
      </>
    </>
  )
}

export default Register
