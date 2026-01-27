import React, { Component } from 'react'
import {UserConsumer} from './context'
import UserContext from './context'

export class ThirdLevelComp extends Component {
    static contextType=UserContext; //instead of line 21
  render() {
    return (
    //   <UserConsumer>
    //     {
    //         (userName)=>{
    //             return <h4>Hello, {userName}</h4>
    //         }
    //     }
    //   </UserConsumer>
    <h4>Hello, {this.context}</h4>
    )
  }
}

// ThirdLevelComp.contextType=UserContext
export default ThirdLevelComp
