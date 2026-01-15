import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)

      this.state={
        name:"semon hany"
      }
      console.log("LifecycleB constructor");
    }
    
    static getDerivedStateFromProps(props, state){
      console.log("LifecycleB getDerivedStateFromProps");
      return null;
    }

    shouldComponentUpdate(nextprops, nextstate){
      console.log("LifecycleB shouldComponentUpdate");
      return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
      console.log("LifecycleB getSnapshotBeforeUpdate");
      return null;
    }

    componentDidUpdate(prevprops, prevstate, snapshot){
      console.log("LifecycleB componentDidUpdate");
    }

    componentDidMount(){
      console.log("LifecycleB componentDidMount");
      return true
    }

  render() {
      console.log("LifecycleB render");
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifeCycleB
