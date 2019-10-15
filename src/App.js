// https://github.com/thinkful-ei-heron/noteful_wesley-evan.git

import React from 'react'
import './App.css';
import MainSection from './MainSection/mainSection';
import SideBar from './SideBar/sideBar';
import Header from './header';
import STORE from './dummy-store';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';


function App(){

  const state ={
    folders: STORE.folders,
    notes: STORE.notes
  }

    return (
    <div className="App">
      <Header />

      <Switch>
        <Route 
          exact path= '/'
          render={()=>{
           return(
             <div>
              <MainSection 
                  notes={state.notes}
              />
              <SideBar 
                  folders={state.folders}
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
