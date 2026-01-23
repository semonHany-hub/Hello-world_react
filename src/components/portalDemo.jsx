import React from 'react'
import ReactDOM from 'react-dom';

function PortalDemo(props) {

  return ReactDOM.createPortal(
    (props.isModalVisible && <div className="modal-window" style={{width:"250px", textAlign:"center", margin:"3px auto", backgroundColor:"#bbb", borderRadius:"5px", padding:"7px"}}>
      <div className="head" style={{display:"flex", justifyContent:"space-between"}}>
        <p>React Modal using DOM portal</p>
        <span className="close" onClick={props.closeModal} style={{backgroundColor:"#999", padding:"1px 3px", height:"25px", width:"25px"}}>&times;</span>
      </div>
      <button onClick={props.clickHandler}>click</button>
    </div>)
    ,
    document.getElementById("modal-root")
  )
}

export default PortalDemo
