import React from 'react'

//crude way of parsing project description
let parseInfo = (projectName) => {

  switch (projectName) {
    /*
    case 'Betti':
      return "betting application";
      break;
    */

    case 'Homepage':
      return "This page";
      break;

    case 'ARM-Controller':
      return "Aztec ritual man, https://globalgamejam.org/2016/games/arm-controller";
      break;

    default:
      return "Unknown projectname";
  }
}

export default React.createClass({

  render() {
    return (
      <div>
        <h2>{this.props.params.projectName}</h2>
        <p>Description: {parseInfo(this.props.params.projectName)}</p>
      </div>
    )
  }
})
