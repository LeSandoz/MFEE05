import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginAsync } from '../actions/index'

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = () => {
    let error = false
    let errorMessages = []

    if (!username) {
      error = true
      errorMessages.push('帳號沒填')
    }

    if (!password) {
      error = true
      errorMessages.push('密碼沒填')
    }

    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }

    const userData = { username, password }
    props.userLoginAsync(userData, () => alert('成功登入'))
  }

  return (
    <>
      {error ? (
        <>
          <div className="alert alert-danger" role="alert">
            {errorMessages.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </>
      ) : (
        ''
      )}
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
            onChange={e => setUsername(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          送出
        </button>
      </div>
    </>
  )
}

// 取得Redux中isAuth的值
const mapStateToProps = store => {
  return { isAuth: store.user.isAuth }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLoginAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
