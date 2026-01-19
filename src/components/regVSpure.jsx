import React, { Component, PureComponent } from 'react'
import PureComp from './pureComp'
import RegularComp from './regularComp'
import MemoComp from './memoComp'

export class RegVSpure extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "semon"
    }
  }
  
  componentDidMount(){
    setInterval( ()=>{
      this.setState({
        name: "semon"
      })
    }, 2000)
  }

  render() {
    console.log("******************regVSpure parent component render**************");

    return (
      <div>
        <MemoComp name={this.state.name}></MemoComp>
        <PureComp name={this.state.name}></PureComp>
        <RegularComp name={this.state.name}></RegularComp>
      </div>
    )
  }
}

export default RegVSpure
