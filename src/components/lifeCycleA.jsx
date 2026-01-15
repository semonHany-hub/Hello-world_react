import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)

      this.state={
        name:"semon hany"
      }
      console.log("LifecycleA constructor");
    }

    handleChangeState= ()=>{
        this.setState({
            name:"React developer"
        })
    }

    static getDerivedStateFromProps(props, state){
      console.log("LifecycleA getDerivedStateFromProps");
      return null;
    }

    shouldComponentUpdate(nextprops, nextstate){
      console.log("LifecycleA shouldComponentUpdate");
      return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
      console.log("LifecycleA getSnapshotBeforeUpdate");
      return null;
    }

    componentDidUpdate(prevprops, prevstate, snapshot){
      console.log("LifecycleA componentDidUpdate");
    }

    componentDidMount(){
      console.log("LifecycleA componentDidMount");
    }

  render() {
      console.log("LifecycleA render");
    return (
      <div>
        LifecycleA
        <LifeCycleB/>
        <button onClick={this.handleChangeState}>change state</button>
      </div>
    )
  }
}

export default LifeCycleA
