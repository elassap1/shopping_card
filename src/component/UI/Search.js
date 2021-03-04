import React from 'react'

function Search(props) {

  let { value, change, click} = props;

  return (
    <div style={styleContainer}>
      <input type="text" name='search' style={styleSearch} value={value} onChange={change} />
      <button onClick={click} style={styleButton} >Search</button>
    </div>
  )
}

export default Search

let styleContainer = {width:'100%',textAlign:'center'}

let styleButton = {padding:'5px', fontSize:'1.2rem',borderRadius:'5px', border:'1px solid #ccdac9', color:'#4e961ee6', outline:'0', cursor:'pointer'}

let styleSearch = {padding:'3px 10px', margin:'0 0 50px 0', fontSize:'1.2rem', outline:'none', borderRadius:'10px 0 0 10px', border:'1px solid #ccdac9', width:'500px', height:'30px'}
