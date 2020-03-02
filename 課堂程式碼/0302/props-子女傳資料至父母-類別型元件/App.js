import React from 'react'
import TextInput from './components/TextInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameFromChild: '',
    }
  }

  render() {
    return (
      <>
        <TextInput
          sendText={text => {
            //傳入text，然後回設定父母元件的state值
            this.setState({ nameFromChild: text })
          }}
        />
        Hello, {this.state.nameFromChild}
      </>
    )
  }
}

export default App
