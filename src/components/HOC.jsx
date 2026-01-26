import React from 'react'

const HOC= (OriginalComponent, incrementNumber)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
            
            this.state = {
                count:0
            }
        }
        
        incrementCount=()=>{
            this.setState(prevState=>({
                count:prevState.count + incrementNumber
            }));
        }
            
        render(){
            console.log("HOC wrapped comp props-> ", this.props); //the property name passed to ClickCounter from app.js appear here not in ClickCounter itself
            //, as it actually passed to the HOC, so we repassed it to the original comp through spread operator.
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}></OriginalComponent>
        }
    }
    return NewComponent
}

export default HOC