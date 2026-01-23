import React, { Component } from "react";

export class IsHero extends Component {

  render() {
    if (this.props.heroName === "joker") throw new Error("Not a hero");
     return <div>{this.props.heroName}</div>;
  }
}

export default IsHero;
