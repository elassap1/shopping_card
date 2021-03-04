import React from 'react'
import './Input.css'

function Input(props) {

  let {id, type, value, classes='input', styles, handler, name, placeholder} = props;

  return (
    <>
      <input id={id} type={`${type}`} name={name} value={value} className={`${classes}`} style={styles} onChange={handler} placeholder={placeholder} />
    </>
  )
}


export default Input