import React from 'react'
import Input from '../UI/Input'
import image from '../icon/wallpaper.jpg'

const About = props => {
  return (
    <div className='about' style={{height:'100vh', background:`url(${image})`}}>
      <div style={styleContainer}>
        <label htmlFor="#name">Full Name</label>
        <Input id='name' type='text' styles={styleInput} />
        <label htmlFor="#email">Email</label>
        <Input id='name' type='email' styles={styleInput} />
        <textarea rows='10' columns='10' placeholder='hi visitor' style={styleArea}></textarea>
      </div>
    </div>
  )
}

export default About

let styleContainer = {display:'grid', width:'400px', position:'absolute', top:'150px', left:'50%', transform:'translate(-50%,0)',
                      justifyContent:'center', padding:'20px', textAlign:'center', background:'#ff000078', color:'white',
                      fontSize:'1.3rem', borderRadius:'10px'}

let styleInput = {height:'30px', borderRadius:'10px', outline:'none', width:'350px', border:'#0462043b solid 1px', margin:'10px'}

let styleArea = {margin:'20px', padding:'10px', fontSize:'1.5rem', border:'#0462043b solid 1px', borderRadius:'10px 10px 0 0'}