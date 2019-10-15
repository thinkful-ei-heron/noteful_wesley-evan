// https://github.com/thinkful-ei-heron/noteful_wesley-evan.git

import React, { Component } from 'react'
import './App.css';
import MainSection from './mainSection';
import SideBar from './sideBar';
import Header from './header';
import STORE from './dummy-store';
import { Route } from 'react-router-dom'
import Homepage from'./HomePage';

 export class App extends Component() {

  state ={
    folders: STORE.folders,
    notes: STORE.notes
  }




  


  render () {return (
    <div className="App">
      <Route 
        path='/'
        component={Homepage}
      />
      <Header />
      <MainSection />
      <SideBar />
    </div>
  );
  }
}

export default App;
