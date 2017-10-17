import React from 'react'
import NavLink from './NavLink'
import Expandable from 'react-expandable' // for now I desided to stick with a pretty good library for this functionality
import styled from 'styled-components';


//these should be moved somewhere else
//update age automatically
var birthday = new Date("August 10, 1989");
function calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

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
                  <ItemHeader className="about">
                    <ItemTitle>About me</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
                ({ isOpened }) => (
                  <ItemHeader className="cv">
                    <ItemTitle>CV</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
                ({ isOpened }) => (
                  <ItemHeader className="projects">
                    <ItemTitle>Projects</ItemTitle>
                    <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                  </ItemHeader>
                ),
              ]}
              enableMultiOpen
            >
              <Item className="about">
                <div className="content">I'm Lauri, a {calculateAge(birthday)} years old tech student majoring in software development. I'm also a gaming and e-sports enthusiast.
                  While on this page you can view and download my CV and get to know some of the projects I've been involved in, some of which are quite imcomplete. <br/> <br/> It is my intention to
                  gradually improve and update this site as I can spare the time to do so.
                </div>
              </Item>

              <Item className="cv">
                <div className="content">
                  You can download my CV <a href="/cv.pdf" download> here</a> (pdf) or view it in your browser below(eipystylol).
                </div>
              </Item>

              <Item className="projects">
                  <div className="content">
                    <Expandable
                      headers={[
                        ({ isOpened }) => (
                          <ItemHeader>
                            <ItemTitle>React</ItemTitle>
                            <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                          </ItemHeader>
                        ),
                        ({ isOpened }) => (
                          <ItemHeader>
                            <ItemTitle>Betti</ItemTitle>
                            <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                          </ItemHeader>
                        ),
                        ({ isOpened }) => (
                          <ItemHeader>
                            <ItemTitle>ARM-Controller</ItemTitle>
                            <ItemIcon>{isOpened ? '-' : '+'}</ItemIcon>
                          </ItemHeader>
                        ),
                      ]}
                      enableMultiOpen
                    >
                      <Item> React-applikaatio </Item>
                      <Item> Bettaus-softa </Item>
                      <Item> Aztec Ritual Man</Item>

                    </Expandable>
                  </div>

              </Item>

            </Expandable>
        
        <div className="footer"> Copyright meitsi</div>

      </div>
    )
  }
})
