import React, { Component } from 'react'
import FolderItem from './FolderItem'
import AddFolderButton from './AddFolderButton'

export class FolderList extends Component {
  // Folder List will find Folders from the the store and map over to create a list of folder options.
  // This view is in the {MainView} and {FolderRoute}
  render() {
    const folderList = this.props.folders;

    return (
      <div className="test">
        {folderList.map(result => {
            if(folderList === false){
              return(<div> </div>)
            } else {
              return(
                <FolderItem 
                  key={Math.random()}
                  id={result.id}
                  name={result.name}
                />
              )
            }
        })}
        <AddFolderButton />
      </div>
    )
  }
}

export default FolderList

