import React, { Component } from 'react'
import FolderList from './FolderList';
import GoBackButton from './GoBackButton';
import AddFolderButton from './AddFolderButton';

export class SideBar extends Component {
  
  render() {
    //console.log(this.props.folders)
    return (
      <div className='FolderList'>
        <FolderList />
        <GoBackButton />
      </div>
    )
  }
}

export default SideBar
