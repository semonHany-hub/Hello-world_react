import React from 'react'

// function Greet(){
    // return <h2>Welcome to my first react app (functional component)</h2>

    // return React.createElement('h2', 
    //     {id:'greeting_functional_comp', className:'greet'}, 
    //     'Welcome to my first react app (functional component)')
    //using jsx React.createElement() method.
// }

const Greet= (props)=> {
    console.log("functional component props-> ",props)
    const {name, children}=props; //props object destruction
    return (
        <div>
            <h2>Welcome to my first react app ({name})</h2>
            <p className="other-names">{children}</p>
        </div>
    )
}

export default Greet

//stateless functional components as an explicit function or anonymous arrow function.