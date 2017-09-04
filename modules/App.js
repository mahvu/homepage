import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="topBar"> </div>
        <h1>Lauri's Homepage</h1>
        <ul role="nav" className="header">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
        <div className="footer"> Copyright meitsi</div>

      </div>
    )
  }
})
