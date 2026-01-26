import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
    console.log("clickCounter props-> ", this.props);
    return (
        <button onClick={this.props.incrementCount}>{this.props.name} clicked {this.props.count} times</button>
    )
  }
}

export default ClickCounterTwo
