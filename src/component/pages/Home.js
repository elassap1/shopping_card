import React, { useState } from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Button from '../UI/Button'
import NavAside from './NavAside'
import image from '../icon/wallpaper.jpg'

function Home() {

  const [fullName, setfullName] = useState('');
  const [repo, setrepo] = useState('');
  const [visitor, setvisitor] = useState([]);
  const [submit, setsubmit] = useState(false);

  let handleChange = (e) => {

    let target = e.target.name
    let val = e.target.value;
    
    return target==='fullName'
            ?setfullName(val)
          :target==='repo'
            ?setrepo(val)
          :'';

  }

  let hendlerSubmit = () => {
    if(fullName && repo){

      let info = {name:fullName, repo:repo}
      setvisitor([...visitor, info]);
      setfullName('');
      setrepo('');
      setsubmit(!submit);
    }
  }

  
let homeDashboard = <Card>
  <div style={{width:'400px',display:'grid', justifyContent:'center', textAlign:'center'}}>
    <h4 style={styleH}>Hi 👋 What's your name?</h4>
    <Input value={fullName} name={'fullName'} type={'text'} styles={styleInput} classes={'sm outliner'} placeholder={'Type Full Name'} handler={handleChange} />

    <h4 style={styleH}>Your repo</h4>
    <Input value={repo} name={'repo'} type={'url'} styles={styleInput} classes={'md outliner'} placeholder={'Type Your Repo'} handler={handleChange} />

    <Button styles={styleButton} handler={hendlerSubmit}>Submit</Button>
  </div>
</Card>

let homeRepo = <NavAside>
  <h2 style={styleH2}>
    Thanks for Visiting
  </h2>
  {visitor.map((person, index) => {
    let { name, repo } = person;
    return <div key={index} style={styleVisitor}>
      <span style={spanStyle}>{name}</span>
      <a href={repo} style={styleAnchor} rel="noopener noreferrer" target='_blank'>Github Link</a>
    </div>
  })}
</NavAside>

  return (
    <div className='home' style={styleContainer} >
      
      {!submit?homeDashboard:homeRepo}
    
    </div>
  )
}

export default Home;

let styleContainer  = {display:'grid', justifyContent:'center',alignItems:'center', background:`url(${image})`, height:'100vh'};

let styleButton     = {background:'#3f8e3ff5', color:'whitesmoke', fontSize:'1.2rem',width:'100%',
                        padding:'5px', marginBottom:'-2px',
                        outline:'none',cursor:'pointer',
                        borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'};

let styleInput      = {width:'100%', borderRadius:'5px', margin:'20px 0', padding:'5px', color:'rgb(149 80 49)', fontSize:'1.2rem'}

let styleVisitor    = {background:'#cdab52bd', color:'whitesmoke', width:'250px', marginTop:'5px', borderBottomRightRadius:'7px'}
let spanStyle       = {padding:'15px',fontSize:'1.2rem', color:'gold'};
let styleAnchor     = {textDecoration:'none', color:'green'};
let styleH          = {width:'90%', margin:'10px 0', color:'whitesmoke'};
let styleH2         = {color:'whitesmoke'}

