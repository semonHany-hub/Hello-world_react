import React, { Component } from 'react'
import ChildComponent from './child'

class ParentComponent extends Component {
    constructor(){
        super();
        this.state={
            parentName:"hany"
        };
        this.showChildMessage=this.showChildMessage.bind(this);
    }

    showChildMessage(childName){
        window.alert(`hello my dad ${this.state.parentName}, your dear ${childName}`);
    }

  render() {
    return (
      <div>
        <h2>passing parent's methods as props</h2>
        <ChildComponent showMessage={this.showChildMessage}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
