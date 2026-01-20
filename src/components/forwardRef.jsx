import React from 'react'

const ForwardRef= React.forwardRef((props, ref)=>{
  return (
    <React.Fragment>
        <input ref={ref} style={props.inputStyles} placeholder="fcomponent with fref"/>
    </React.Fragment>
  )
})

export default ForwardRef
