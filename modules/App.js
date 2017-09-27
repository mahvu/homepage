import React from 'react'
import NavLink from './NavLink'
import Expandable from 'react-expandable'
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  padding: 12px;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;
 
const ItemTitle = styled.div`
`;
 
const ItemIcon = styled.div`
`;

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

            <Expandable
              headers={[
                ({ isOpened }) => (
                  <ItemHeader>
                    <ItemTitle>About me</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
                ({ isOpened }) => (
                  <ItemHeader>
                    <ItemTitle>CV</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
                ({ isOpened }) => (
                  <ItemHeader>
                    <ItemTitle>Projects</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
              ]}
              enableMultiOpen
            >
              <Item>
                I am very esa
              </Item>

              <Item>
                Mah cv
              </Item>

              <Item>
                Mah projects
              </Item>

            </Expandable>


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
