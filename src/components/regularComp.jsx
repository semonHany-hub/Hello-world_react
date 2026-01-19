import React, { Component } from 'react'

class RegularComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"semon"
      }
    }

  render() {
    console.log("reg component render");
    return (
      <>
        <h3>regular class component [{this.props.name}]</h3>
      </>
    )
  }
}

export default RegularComp
