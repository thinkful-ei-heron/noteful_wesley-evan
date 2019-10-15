import React, { Component } from 'react'

export class FolderList extends Component {
  // Folder List will find Folders from the the store and map over to create a list of folder options.
  // This view is in the {MainView} and {FolderRoute}
  render() {
    return (
      <div>
        <h4>Folder List</h4>
        <h6>Folder Item</h6>
        <h6>Folder Item</h6>
        <h6>Folder Item</h6>
        <h6>Folder Item</h6>
        <h6>Add Folder Button</h6>
      </div>
    )
  }
}

export default FolderList
