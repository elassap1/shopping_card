import React from 'react'

function Logo(props) {

  let {classes='', styles='', src='', alt='Logo'} = props;

  return (
    <>
      <img src={`${src}`} alt={`${alt}`} className={`${classes}`} style={styles} />
    </>
  )
}

export default Logo
