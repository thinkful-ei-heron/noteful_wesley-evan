import React, { Component } from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export class MainSection extends Component {
  render() {
    const notesList = this.props.notes;

    return (
      <div className="MainSection">
        <h3>Main Section</h3>
        {/* This will need to map over the store and call note item for each. */}
        {notesList.map(result => {
          if(notesList=== false){
            return(<div></div>)
          } else {
            return (
              <NoteItem 
                id={result.id}
                key={Math.random()}
                content={result.content}
                name={result.name}
                modified={result.modified}
                folderId={result.folderId}
              />
            )
          }
        })}
        <AddNote 
          key={Math.random()}
        />
      </div>
    )
  }
}

export default MainSection


//         {bookResults.map(result => {
//           if(bookResults === false){
//             return(<div></div>)
//           } else {
//           return (
//             <BookItem 
//               title={result.title}
//               key={Math.random()}
//               price={result.price}
//               author={result.authors}
//               description={result.description}
//               imgUrl={result.img}
//           />
//         )
//           }
//         })} 
//     </div>
