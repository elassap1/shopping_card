import React from 'react'
import { Link } from 'react-router-dom'
import './Anchor.css'

function Anchor(props) {

  let {anchor='', classes='', styles='', children=''} = props;

  return (
    < >
      <Link to={anchor} className={`anchor ${classes}`} style={styles} >{children}</Link>
    </>
  )
}

export default Anchor
