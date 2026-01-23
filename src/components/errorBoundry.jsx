import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
      super(props)

      this.state = {
         isHero:true
      }
    }
    
     static getDerivedStateFromError(error){
        return {
            isHero:false
        }
    }

    componentDidCatch(error, info){
        console.log("error-> ", error);
        console.log("error info-> ", info);
    }

  render() {
    return (
      !this.state.isHero?
      (<div>
        Not A Hero
      </div>):
      (this.props.children)
    )
  }
}

export default ErrorBoundry
