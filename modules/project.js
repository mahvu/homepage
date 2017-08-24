import React from 'react'

//crude way of parsing correct project description
function parseInfo(projectName){
  if(projectName === "Betti"){
    //console.log('betti');
    return "betting application";
  }
  else if(projectName === "React"){
    //console.log('jokumuu');
    return "react application";
  }
  else{
    return "Aztec ritual man";
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
