import React, { Component } from 'react'

export class RenderProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    incrementCount= ()=>{
        this.setState(prevState=> ({
            count : prevState.count+1
        }))
    }

  render() {
    console.log("render props-> ",this.props)
    return (
      <div>
        {this.props.render?(this.props.render(this.state.count, this.incrementCount)):(this.props.children(this.state.count, this.incrementCount))}
      </div>
    )
  }
}

export default RenderProps
