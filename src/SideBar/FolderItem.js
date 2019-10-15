import React, { Component } from 'react'

export class FolderItem extends Component {
  render() {
    return (
      <div className='FolderItem'>
          <p>{this.props.name}</p>
      </div>
    )
  }
}

export default FolderItem