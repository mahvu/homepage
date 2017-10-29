import React from 'react'

export default React.createClass({
  render() {
    return <div>

      You can download my CV <a href="/CV_Rasi.pdf" download> here</a> (pdf). For now my CV is only available in finnish.

      <div className="cvImage">
        <img src="/cv_img.jpg"/>
      </div>

    </div>
  }
})
