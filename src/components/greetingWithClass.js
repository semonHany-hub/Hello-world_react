import React, {Component} from 'react'

class Greeting extends Component{
    render(){
        // return <h2>Welcome to my first react app (class component)</h2>
        console.log("class component props-> ",this.props)
        return React.createElement('div', null, 
            React.createElement('h2', 
            {id:'greeting_class_comp', className:'greet'}, 
            'Welcome to my first react app (class component)'),
            React.createElement('p', {className:"other-names"}, this.props.children)
        )
        //using jsx React.createElement() method.
    }
}

export default Greeting