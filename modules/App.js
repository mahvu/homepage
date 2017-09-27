import React from 'react'
//import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="topBar">
          <ul className="extLinks">
            <li><a href="https://www.linkedin.com/in/lrasi/" target="_blank"> <img src="/linkedin.png" alt="toMyLinkedinProfile"/> </a></li>
            <li><a href="https://github.com/mahvu" target="_blank"> <img src="/github.png" alt="toMyGitHubProfile"/> </a></li>
            <li><a href="" target="_blank"> <img src="" alt=""/> </a></li>
          </ul>
        </div>


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
