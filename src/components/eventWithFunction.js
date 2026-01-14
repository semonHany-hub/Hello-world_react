import React from 'react'

function ClickWithFunction(){

    function clickHandler(e){
        console.log(`class component button ${e.target} clicked...\ncoordinates of the clicked point-> ${e.clientX}, ${e.clientY}\nwhich mouse button clickes? ${e.button}`);
    }

    return(<div>
        <button onClick={clickHandler}>Click(functional component)</button>
    </div>);
}

export default ClickWithFunction