import React from 'react'

function ClickWithFunction(){

    function clickHandler(){
        console.log("class component button clicked...");
    }

    return(<div>
        <button onClick={clickHandler}>Click(functional component)</button>
    </div>);
}

export default ClickWithFunction