import React, { Component } from 'react'
import FolderItem from './FolderItem'
import AddFolderButtom from './AddFolderButton'
import GoBackButton from './GoBackButton'

export class FolderList extends Component {
  // Folder List will find Folders from the the store and map over to create a list of folder options.
  // This view is in the {MainView} and {FolderRoute}
  render() {
    return (
      <div>
        <FolderItem />
        <FolderItem />
        <FolderItem />
        <FolderItem />
        <AddFolderButtom />
      </div>
    )
  }
}

export default FolderList
