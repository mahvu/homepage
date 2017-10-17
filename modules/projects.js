import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <h2>Projects I've been involved in</h2>
        <ul>
          <li><NavLink to="/projects/Betti">Betting app</NavLink></li>
          <li><NavLink to="/projects/React">React</NavLink></li>
          <li><NavLink to="/projects/ARM-Controller">ARM-Controller</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
