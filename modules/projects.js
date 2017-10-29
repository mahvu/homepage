import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

/*
          <li><NavLink to="/projects/Betti">Betting app</NavLink></li>
          <li><NavLink to="/projects/React">React</NavLink></li>
*/

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Projects I've been involved in</h2>
        <ul>
          <li><NavLink to="/projects/Homepage">Homepage</NavLink></li>
          <li><NavLink to="/projects/ARM-Controller">ARM-Controller</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})