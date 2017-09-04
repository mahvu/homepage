import React from 'react'

//crude way of parsing project description
let parseInfo = (projectName) => {

  switch (projectName) {
    case 'Betti':
      return "betting application";
      break;

    case 'React':
      return "react application";
      break;

    case 'ARM-Controller':
      return "Aztec ritual man";
      break;
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
