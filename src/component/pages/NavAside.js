import React from 'react'

function NavAside(props) {

  let {children} = props;

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default NavAside

let styles    = { marginTop:'-40vh', textAlign:'center'}
