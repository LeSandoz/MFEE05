import React from 'react'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value })
          }}
        />
        {/* 注意這裡只能用函式先包住，要延後執行 */}
        <button onClick={() => this.props.sendText(this.state.name)}>
          送出
        </button>
      </>
    )
  }
}

export default TextInput
