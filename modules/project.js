import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.projectName}</h2>
      </div>
    )
  }
})