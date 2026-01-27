import React, { Component } from 'react'
import SecondLevelComp from './secondLevelComp'

class FirstLevelComp extends Component {
  render() {
    return (
      <SecondLevelComp></SecondLevelComp>
    )
  }
}

export default FirstLevelComp
