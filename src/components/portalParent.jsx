import React, { Component } from 'react'
import PortalDemo from './portalDemo'

export class PortalParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clicks:0,
         isModalVisible:false
      }
    }
    
    clickHandler= ()=>{
        this.setState(prevState=>({
            clicks:prevState.clicks+1
        }))
    }

    showModal= ()=>{
        this.setState({
            isModalVisible:true
        })
    }

    closeModal= ()=>{
        this.setState({
            isModalVisible:false
        })
    }
  render() {
    return (
      <div style={{maxWidth:"400px", margin:"5px auto", display:"flex", flexDirection:"column", alignItems:"center", position:"relative"}}>
        <p>the button clicked for {this.state.clicks} times</p>
        <button onClick={this.showModal}>show Modal</button>
        <PortalDemo clickHandler={this.clickHandler} isModalVisible={this.state.isModalVisible} closeModal={this.closeModal}></PortalDemo>
      </div>
    )
  }
}

export default PortalParent
