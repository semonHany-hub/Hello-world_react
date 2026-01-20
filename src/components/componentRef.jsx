import React, { Component } from 'react'

class ComponentRef extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef();
      this.cbRef=null;
      this.setcbRef=element=>{
        this.cbRef=element;
      } //the 'element' parameter passed implicitly to this method when assigned to the input ref property
    }

  render() {
    return (
      <React.Fragment>
        <input style={this.props.inputStyles} type="text" ref={this.inputRef} placeholder="with react ref"/>
        <input style={this.props.inputStyles} type="text" ref={this.setcbRef} placeholder="with callback ref"/>
      </React.Fragment>
    )
  }
}

export default ComponentRef
