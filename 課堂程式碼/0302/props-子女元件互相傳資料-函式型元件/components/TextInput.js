import React, { useState } from 'react'

function TextInput(props) {
  const [name, setName] = useState('')

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
      />
      {/* 注意這裡只能用函式先包住，事件處理必需是一個函式 */}
      <button onClick={() => props.sendText(name)}>送出</button>
    </>
  )
}

export default TextInput
