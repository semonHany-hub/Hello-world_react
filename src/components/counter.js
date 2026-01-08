import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }

    increment(){
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }), ()=>{
            console.log("call-back updated counter-> ", this.state.counter)
        })
        console.log(this.state.counter); //will print the value before it has been updated
    }

    increment5Times(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
        <div>
            <h2>Counter</h2>
            <span>{this.state.counter}</span>
            <br/>
            <button onClick={()=>this.increment()}>increment</button>
            <button onClick={()=>this.increment5Times()}>increment 5 times</button>
        </div>
        )
    }
}

export default Counter
