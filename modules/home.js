import React from 'react'

//update age automatically
var birthday = new Date("August 10, 1989");
function _calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default React.createClass({
  render() {
    return <div className="content">I'm Lauri, a {_calculateAge(birthday)} years old tech student majorin in software development. I'm also a gaming and e-sports enthusiast.</div>
  }
})