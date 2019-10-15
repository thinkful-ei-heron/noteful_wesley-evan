import React, { Component } from 'react'

export class NoteItem extends Component {
  //This will add a button to DELETE the item.
  // This will also need to have the folder ID passed in. 
  render() {
    //console.log(this.props);
    return (
      <div className='SingleNote'>
        <h3>help</h3>
        <p>Date modified</p>
        <button>Delete</button>
        <p>content</p>
      </div>
    )
  }
}

export default NoteItem
