// https://github.com/thinkful-ei-heron/noteful_wesley-evan.git

import React, { Component } from 'react'
import './App.css';
import MainSection from './MainSection/mainSection';
import SideBar from './SideBar/sideBar';
import Header from './header';
import STORE from './dummy-store';


function App(){

  const state ={
    folders: STORE.folders,
    notes: STORE.notes
  }
  //console.log(state);
    return (
    <div className="App">
      <Header />
      <MainSection 
        notes={state.notes}
      />
      <SideBar 
        folders={state.folders}
      />
    </div>
  );
    }

export default App;
