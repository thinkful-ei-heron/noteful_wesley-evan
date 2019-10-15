// https://github.com/thinkful-ei-heron/noteful_wesley-evan.git

import React from 'react'
import './App.css';
import MainSection from './MainSection/mainSection';
import SideBar from './SideBar/sideBar';
import Header from './header';
import STORE from './dummy-store';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import GoBackButton from './SideBar/GoBackButton';
import Content from './MainSection/content';
import AddNote from './MainSection/AddNote'


function App() {

  const state = {
    folders: STORE.folders,
    notes: STORE.notes
  }
  return (
    <div className="App">
      <Switch>
      <Route
          path='/note/:noteId'
          render={(props) => {
            const filteredNote = state.notes.filter(note => (note.id === props.match.params.noteId))
            return (
              <div>
                <Header />
                <MainSection
                  notes={filteredNote}
                />
                <Content 
                  content={filteredNote}
                />
                <GoBackButton />
              </div>
            )
          }}
        />
        <Route
          path='/folders/:folderId'
          render={(props) => {
            const filteredNotes = state.notes.filter(note => (note.folderId === props.match.params.folderId))
            return (
              <div>
                <Header />
                <MainSection
                  notes={filteredNotes}
                />
                <SideBar
                  folders={state.folders}
                />
                <AddNote 
                  key={Math.random()}
                />
              </div>
            )
          }}
        />
        <Route
          path='/'
          render={(props) => {
            return (
              <div>
                <Header />
                <MainSection
                  notes={state.notes}
                />
                <SideBar
                  folders={state.folders}
                />
                <AddNote 
                  key={Math.random()}
                />
              </div>
            )
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
