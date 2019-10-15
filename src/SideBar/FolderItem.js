import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class FolderItem extends Component {

  render() {
    return (
      <div className='FolderItem'>
          <p><NavLink to={`/folders/${this.props.id}`}>{this.props.name}</NavLink></p>
      </div>
    )
  }
}

export default FolderItem