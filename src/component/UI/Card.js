import React from 'react'

function Container(props) {

  let { id, data, handlerInputProducts, children, handlerCheckOut, price, inputValue} = props;
  let books = [];
  
  if(data){
  books = data.items.map((book,index) =>{

    let { title, publishedDate, language, imageLinks, pageCount, authors } = book.volumeInfo;

  return (
    <div key={id} style={styleCort}>

      <span style={{marginRight:'10px'}}><img style={styleImage} src={imageLinks.smallThumbnail} alt="book"/></span>
      
      <span style={styleSpan}>{title.lenght<20?title:title.slice(0,20)}
      {authors?<div style={styleP}><p style={{margin:'25px 0 10px'}}>author</p> {authors}</div>:''}
      </span>
      
      {publishedDate&&<p style={styleP}>published: {publishedDate}</p>}
      
      {pageCount&&<p style={styleP}>pageCount: {pageCount}</p>}
      
      <p style={styleP}>language: {language}</p>

      <div style={styleCounter}>
      
        <span >Price:</span><span style={stylePrice} >{price[index]} $</span>
        
        <button style={styleButton} onClick={()=>handlerInputProducts('c'+book.id)} name='inc'>+</button>
        
        <input style={styleInput} id={`${'p'+book.id}`} type="text" onChange={()=>handlerInputProducts('p'+book.id)} value={inputValue[index]} />
        
        <button style={styleButton} onClick={()=>handlerInputProducts('d'+book.id)} name='dec'>-</button>
      
      </div>

      <div style={styleCheckOutContainer} onClick={handlerCheckOut}>
        <button style={styleCheckOut}>CheckOut</button>
      </div>

    </div>
    )
    })
  }

    return (
      <div style={styleContainer}>

      {books&&books}
      {children}
      
      </div>
    )
}
export default Container

let styleInput = {width:'30px', fontSize:'1.1rem', textAlign:'center'}

let styleCounter = {background:'#d3d4d1', color:'black', width:'100%', textAlign:'center', borderRadius:' 15px 15px 15px 15px', height:'35px', padding:'2px 0'}

let stylePrice = {marginRight:'5px', width:'20%',background:'blue', color:'white', display:'inline-block', textAlign:'center', borderRadius:'10px', margin:'5px'}

let styleCheckOutContainer = {width:'100%', position:'absolute', bottom:'-5px', left:'0'}

let styleCheckOut = {cursor:'pointer', color:'#fbfbfb', background:'#25a025', width:'100%', height:'30px'}

let styleContainer = {display:'flex', flexWrap:'wrap', justifyContent:'center'}

let styleCort = {position:'relative', background:'#2d3956', color:'white', display:'flex', flexWrap:'wrap',boxShadow:'green 0px 0px 1px', overflow:'hidden', height:'400px', width:'320px', borderRadius:'10px', padding:'15px 15px 30px', margin:'15px'}

let styleButton   = {width:'25px', fontSize:'1.2rem', background:'#af9e71', outline:'none', cursor:'pointer'};

let styleImage  = {height:'200px', width:'130px'}

let styleSpan   = {width:'150px',marginTop:'30px', textAlign:'center'}

let styleP      = {width:'90%',display:'block', textAlign:'center'}

