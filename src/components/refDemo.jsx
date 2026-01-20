import React, { Component } from 'react'
import ComponentRef from './componentRef';
import ForwardRef from './forwardRef';

class RefDemo extends Component {
    constructor(props) {
      super(props)

      this.inputComponentRef=React.createRef();
      this.frCompRef=React.createRef();
    }
    
    formStyles={display:"flex",
        flexDirection:"column",
        width:"200px",
        margin:"5px auto 20px",
        gap:"5px",
        alignItems:"center"};

    inputStyles={
        borderRadius:"5px",
        padding:"3px 5px",
        margin:"2px"
    };

    buttonStyles= {width:"fit-content",
        border:"none",
        backgroundColor:"#597",
        borderRadius:"5px"};

    showAlert= ()=>{
        alert(`*react referenced input value-> ${this.inputComp.inputRef.current.value}\n*callback referenced input value-> ${this.inputComp.cbRef.value}`);
    }

    focusInput(){
        this.frCompRef.current.focus();
    }

    componentDidMount(){
        this.inputComp=this.inputComponentRef.current;
        console.log(`react ref: ${this.inputComp.inputRef},  callback ref: ${this.inputComp.cbRef}`);
        //reference with React.createRef() generate object contains 'current' property with value represent the refered HTML element
        //,while the callback reference assign cbref to 'element' parameter whith represent the refered HTML element directly.
        this.inputComp.inputRef.current.focus();
        if(this.inputComp.cbRef)
            this.inputComp.cbRef.focus();
        //condition used because the componentDidMount method can be concurrent with handleClick method, then the cbref maybe null.
    }
    //we access the referenced DOM elements inside componentDidMount because we ensure that it called after render method.

  render() {
    return (
      <>
        <form style={this.formStyles}>
            <h2>DOM ref</h2>
            <ComponentRef ref={this.inputComponentRef}  inputStyles={this.inputStyles}></ComponentRef>
            <button style={this.buttonStyles} onClick={this.showAlert}>Show Alert</button>
        </form>

        <div style={this.formStyles}>
            <ForwardRef ref={this.frCompRef} inputStyles={this.inputStyles}></ForwardRef>
            <button style={this.buttonStyles} onClick={()=> this.focusInput()}>Focus Input</button>
        </div>
      </>
    )
  }
}

export default RefDemo
