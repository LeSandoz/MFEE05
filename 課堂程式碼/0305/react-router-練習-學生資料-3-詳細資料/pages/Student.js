import React from 'react'
import { data } from '../data/index'
import { withRouter } from 'react-router-dom'

function Student(props) {
  let student = null

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === +props.match.params.id) {
      student = data[i]
    }
  }

  if (student === null) {
    return (
      <>
        <h1>沒找到資料</h1>
        <button onClick={() => props.history.push('/')}>回首頁</button>
      </>
    )
  }

  return (
    <>
      <h1>學生詳細資料</h1>
      <ul className="list-group">
        <li className="list-group-item active">{student.name}</li>
        <li className="list-group-item">{student.id}</li>
        <li className="list-group-item">{student.birth}</li>
      </ul>
      <button onClick={() => props.history.push('/')}>回首頁</button>
    </>
  )
}

export default withRouter(Student)
