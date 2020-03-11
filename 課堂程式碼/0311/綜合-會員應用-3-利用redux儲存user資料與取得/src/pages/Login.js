import React from 'react'

function Login() {
  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">帳號</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="請輸入帳號"
            onChange={() => {}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">密碼</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="請輸入密碼"
            onChange={() => {}}
          />
        </div>
        <button className="btn btn-primary" onClick={() => {}}>
          送出
        </button>
      </div>
    </>
  )
}

export default Login
