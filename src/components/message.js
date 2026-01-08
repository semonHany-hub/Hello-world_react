import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"It's a class state variabe"
        }
    }

    changeMessage(){
        this.setState({
            message:"state changed successfully"
        })
    }

    render(){
        return(
            <div>
                <h2>state variable message</h2>
                <p>{this.state.message}</p>
                <button onClick={()=>this.changeMessage()}>change message</button>
            </div>
        )
    }
}

export default Message