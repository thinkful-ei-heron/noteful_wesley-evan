import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NoteItem extends Component {
  //This will add a button to DELETE the item.
  // This will also need to have the folder ID passed in. 
  
  render() {
    //console.log(this.props);
    const dateModified = new Date(this.props.modified);
    return (
      <div className='SingleNote'>
        <h3><Link to={`/note/${this.props.id}`} >{this.props.name}</Link></h3>
        <span>{dateModified.toDateString()}</span>
        <button>Delete</button>
      </div>
    )
  }
}

export default NoteItem
