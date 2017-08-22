import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Lauri's Homepage</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
