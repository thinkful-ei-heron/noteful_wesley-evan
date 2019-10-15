import React, { Component } from 'react'
import SideBar from './sideBar'
import MainSection from './mainSection';
import Header from './header';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <SideBar />
      </div>
    )
  }
}

export default HomePage
