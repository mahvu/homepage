import React from 'react'

export default React.createClass({
  render() {
    return (

      <div>

        <div className="header" id="header">
          <h1> Lauri Rasi </h1>
        </div>

        <div className="container">

          <div className="row">

            <div className="one-half column">

              <h2>
              <i className="fa fa-male"></i>
              &nbsp;About me 
              </h2>

              <p>My name is Lauri Rasi. I'm a bachelor of science, currently working on my master's degree in software engineering at 
              &nbsp;<a href="http://www.tut.fi/en/home">Tampere University of Technology.</a>&nbsp; 
              I am also an esports enthusiast and a retired esports professional, atleast for now. Currently I am pursuing a career in software industry.
              <br />
              <br />
              My interests lie in various web technologies, especially in JavaScript. However I also love to get my hands dirty with little Arduino projects from time to time.
              </p>

            </div>

            <div className="one-half column">

              <h2>
              <i className="fa fa-graduation-cap"></i>
              &nbsp;Reference 
              </h2>

              <p>Best option for browsing the projects I've been involved in is to check out my <a href="https://github.com/mahvu">Github profile</a>&nbsp;
              I have also prepared short descriptions of my personal projects on <a href="">this page</a>. 
              <br />
              <br />

              </p>

            </div>
          </div>

          <h2>
          <i className="fa fa-file-text"></i>
          &nbsp;CV
          </h2>

          <p>You can view my CV <a href="/CV_Rasi.pdf">here</a>. Currently it is only available in finnish.
          </p>


        </div>  
        
    <div className="footer">
      Lauri Rasi

      <div itemscope itemtype="http://schema.org/Person">
        <link itemprop="url" href="laurira.si"/>
        <a itemprop="sameAs" href="https://twitter.com/mafu_ow"> <i className="fa fa-twitter"></i> </a>
        <a itemprop="sameAs" href="https://github.com/mahvu"> <i className="fa fa-git"></i> </a>
        <a itemprop="sameAs" href="https://www.linkedin.com/in/lrasi/"> <i className="fa fa-linkedin"></i> </a>
      </div>
    </div>

    </div>
      
    )
  }
})
