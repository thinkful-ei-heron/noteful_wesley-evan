import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1> <Link to="/"> Noteful </Link></h1>
      </div>
    )
  }
}

export default Header
