import React, { Component } from 'react'
import HOC from './HOC'

class ClickCounter extends Component {

  render() {
    console.log("clickCounter props-> ", this.props);
    return (
        <button onClick={this.props.incrementCount}>{this.props.name} clicked {this.props.count} times</button>
    )
  }
}

export default HOC(ClickCounter, 5)
