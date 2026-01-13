import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={()=>props.showMessage("semon")}>click to show message from child</button>
  )
}

export default ChildComponent
