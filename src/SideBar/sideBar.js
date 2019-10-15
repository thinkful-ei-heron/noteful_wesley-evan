import React, { Component } from 'react'
import FolderList from './FolderList';
import GoBackButton from './GoBackButton';
import './sideBar.css';

export class SideBar extends Component {
  
  render() {
    //console.log(this.props.folders)
    return (
      <div className='FolderList'>
        <FolderList 
          folders={this.props.folders}
        />
      </div>
    )
  }
}

export default SideBar
