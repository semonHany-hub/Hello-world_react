import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Semon"
      }
    }
    
  render() {
    console.log("pure component render");
    return (
      <>
        <h3>pure class component [{this.props.name}]</h3>
      </>
    )
  }
}

export default PureComp
