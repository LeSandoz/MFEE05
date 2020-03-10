// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// 模擬與伺服器相連
export const addValueAsync = value => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add value')

      dispatch(addValue(value))
    }, 3000)
  }
}
