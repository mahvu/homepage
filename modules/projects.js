import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    const project = event.target.elements[0].value
    const path = `/projects/${project}`
    browserHistory.push(path)
    console.log(path)
  },

  render() {
    return (
    <div>
      <h2>Projects</h2>
      <ul>
          <li><NavLink to="/projects/betti">Betting app</NavLink></li>
          <li><NavLink to="/projects/react">React</NavLink></li>

          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="project"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
      </ul>
      {this.props.children}
    </div>
    )
  }
})