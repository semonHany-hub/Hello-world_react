import React, {Component} from 'react'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true
        }
    }

    render(){
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             {this.props.children}
        //             <p>"Welcome, Semon!"</p>
        //         </div>
        //     )
        // }
        // else
        //     return(
        //         <div>
        //             {this.props.children}
        //             <p>"Welcome, Guest!"</p>
        //         </div>
        //     )
        /*using if-else block*/ 

        // const message= this.state.isLoggedIn?<div>"Welcome, Semon!"</div>:<div>"Welcome, Guest!"</div>
        // return (
        //     <div>
        //         {this.props.children}
        //         {message}
        //     </div>
        // )
        /*using element variables*/ 

        return (
            <div>
                {this.props.children}
                <div>{this.state.isLoggedIn? "Welcome, Semon!": "Welcome, Guest!"}</div>
            </div>
        )
        /*using ternary operator*/ 
    }
}

export default Welcome