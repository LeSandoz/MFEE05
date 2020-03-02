import React, { useState } from 'react'
import TextInput from './components/TextInput'
import Text from './components/Text'

function App(props) {
  const [nameFromChild, setNameFromChild] = useState('')

  return (
    <>
      {/* sendText屬性是一個函式 */}
      <TextInput
        sendText={text => {
          //傳入text，然後回設定父母元件的state值
          setNameFromChild(text)
        }}
      />
      <Text name={nameFromChild} />
    </>
  )
}

export default App
