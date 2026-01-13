import React, {Component} from 'react'

class ClickWithClass extends Component{

    constructor(){
        super();
        this.state={
            message:"Hi!"
        };
        // this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler= ()=>{
        console.log("class component button clicked...");
        this.setState({
            message:"Good Bye!"
        });
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler}>Click to change message(class component)</button>
            </div>
        );
    }
}

export default ClickWithClass