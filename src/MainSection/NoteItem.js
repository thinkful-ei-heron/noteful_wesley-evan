import React, { Component } from 'react'
// import { format } from 'date-fns'

export class NoteItem extends Component {
  //This will add a button to DELETE the item.
  // This will also need to have the folder ID passed in. 
  
  render() {
    //console.log(this.props);
    const dateModified = new Date(this.props.modified);
    return (
      <div className='SingleNote'>
        <h3>{this.props.name}</h3>
        <span>{dateModified.toDateString()}</span>
        <button>Delete</button>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default NoteItem
