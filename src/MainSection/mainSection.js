import React, { Component } from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export class MainSection extends Component {
  render() {
    return (
      <div className="MainSection">
        <h3>Main Section</h3>
        {/* This will need to map over the store and call note item for each. */}
        <NoteItem />
        <AddNote />
      </div>
    )
  }
}

export default MainSection
