import React, { Component } from 'react'
import FolderList from './FolderList';
import GoBackButton from './GoBackButton';
import AddFolderButton from './AddFolderButton';

export class SideBar extends Component {
  
  render() {
    return (
      <div>
        <h3>Side Bar Section</h3>
        <FolderList />
        <AddFolderButton/>
        <GoBackButton />
      </div>
    )
  }
}

export default SideBar
