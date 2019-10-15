import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class GoBackButton extends Component {
  render() {
    return (
      <div>
        <button><Link to="/">Go back</Link></button>
      </div>
    )
  }
}

export default GoBackButton
