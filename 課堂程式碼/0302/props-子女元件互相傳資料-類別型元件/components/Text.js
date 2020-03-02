import React from 'react'

class Text extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <>Hello, {this.props.name}</>
  }
}

export default Text
