import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
      <div>
        <p>{this.props.content[0].content}</p>
      </div>
    )
  }
}

export default Content
