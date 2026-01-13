import React from 'react'

function PersonInfo(props) {
  return (
    <p>
      Iam {props.info.name}. Iam {props.info.age} and i'm good at {props.info.skill}
    </p>
  )
}

export default PersonInfo
