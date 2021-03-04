import React from 'react'

function Button(props) {

  let {styles, children, handler} = props;

  return (
    <>
      <button style={styles} onClick={handler}> {children} </button>
    </>
  )
}

export default Button