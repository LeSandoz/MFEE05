import React from 'react'
import TextInput from './components/TextInput'
import Text from './components/Text'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameIsOk: false, //判斷值
      passwordIsOk: false, //判斷值
    }
  }

  // 利用物件計算得來的屬性名稱，讓所有的輸入框用共一個方法
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSend = event => {
	  //三元表達式
    this.state.username === 'eddy'
      ? this.setState({ usernameIsOk: true })
      : this.setState({ usernameIsOk: false })

    this.state.password === '12345'
      ? this.setState({ passwordIsOk: true })
      : this.setState({ passwordIsOk: false })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">帳號</label>
            <input
              type="text"
              name="username"
              className={`form-control ${
                this.state.usernameIsOk ? 'is-valid' : 'is-invalid'
              }`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="請輸入帳號"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">密碼</label>
            <input
              type="password"
              name="password"
              className={`form-control ${
                this.state.passwordIsOk ? 'is-valid' : 'is-invalid'
              }`}
              id="exampleInputPassword1"
              placeholder="請輸入密碼"
              onChange={this.handleInput}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleSend}>
            送出
          </button>
          {/* style屬性要注意，值必需是一個物件值*/}
          <span style={{ color: 'red', fontSize: 20 }}>注意事項：xxxx</span>
        </div>
      </>
    )
  }
}

export default App
