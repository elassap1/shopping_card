import React from 'react';

import logo from '../icon/irassari.png';
import Anchor from '../UI/Anchor';
import Logo from '../UI/Logo';

function Nav() {
  
  return (
    <div style={{position:'fixed', width:'100vw', padding:'10px 150px', boxShadow:' #a29d9d 1px 3px 5px', display:'flex', justifyContent:'flex-end', background:'#5c5757a1'}} >
      <Logo src={logo} styles={logoStyle} />
      <Anchor anchor='home' styles={styles} >Home</Anchor>
      <Anchor anchor='book' styles={styles} >Books</Anchor>
      <Anchor anchor='about' styles={styles} >About US</Anchor>
    </div>
  )
}

export default Nav

  let styles = {textDecoration:'none', color:'#f2eeeec2', width:'150px', fontWeight:'500', fontSize:'1.2rem', marginLeft:'50px'};
  let logoStyle = {width:'100px',height:'100px', position:'absolute', top:'15px', left:'30px', transform:'rotate(10deg)', zIndex:10};
