import React from 'react'
import './styleSheet.css'
import '../appStyles.css';
import Styles from'../appStyles.module.css';

const headingStyles={
    fontSize:'72px',
    fontWeight:'bold'
}

function StyleSheet(props) {
    var primaryClass=props.primary? 'primary': '';
    var headingClass=props.heading? 'heading': '';

  return (
    <div>
        <span className={`${primaryClass} ${headingClass}`} style={props.heading? headingStyles: {}}>Primary</span>
        <h4 className={Styles.success}>Success</h4>
        <h4 className="error">Error</h4>
    </div>
  )
}

export default StyleSheet
