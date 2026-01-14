import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
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

    // return (
    //   this.state.isLoggedIn && (
    //     <div>
    //       {this.props.children}
    //       <p>"Welcome, Semon!"</p>
    //     </div>
    //   )
    // );
    /*using && operator based on the logic that if the left-hand condition is false it will ignore the rest (right-hand condition)
      ,else it will override the right-hand jsx block over the true value of the left-hand and return it
      * this approach used to return a block of elements if a condition ocuured and nothing otherwise*/

    return (
      <div>
        {this.props.children}
        <div>
          {this.state.isLoggedIn ? "Welcome, Semon!" : "Welcome, Guest!"}
        </div>
        {this.state.isLoggedIn ? (
          <button>start now</button>
        ) : (
          <p>log in first to start journey</p>
        )}
      </div>
    );
    /*using ternary operator*/
  }
}

export default Welcome;
