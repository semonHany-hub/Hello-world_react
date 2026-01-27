import React, { Component } from 'react'
import ThirdLevelComp from './thirdLevelComp'

class SecondLevelComp extends Component {
  render() {
    return (
      <ThirdLevelComp></ThirdLevelComp>
    )
  }
}

export default SecondLevelComp
