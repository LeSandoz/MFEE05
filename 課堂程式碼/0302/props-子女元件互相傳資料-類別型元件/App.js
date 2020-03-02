import React from 'react'
import TextInput from './components/TextInput'
import Text from './components/Text'

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
        {/* sendText屬性是一個函式 */}
        <TextInput
          sendText={text => {
            //傳入text，然後回設定父母元件的state值
            this.setState({ nameFromChild: text })
          }}
        />
        <Text name={this.state.nameFromChild} />
      </>
    )
  }
}

export default App
