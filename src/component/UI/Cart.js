import React from 'react'
import image from '../icon/panier.png'

function Cart(props) {

  let {ProductCalcul, handlerCheckOut} = props;
  let [totalProduct, totalPrice] = ProductCalcul;
  return (
    <div style={styleContainer} onClick={handlerCheckOut}>
      <span style={styleChild}>{totalProduct?totalProduct:0} </span>
      <span><img style={styleImage} src={image} alt="panier"/> </span>
      <span style={stylePrice}>{totalPrice?totalPrice.toFixed(2)+'$':0+'$'}</span>
      <span style={styelCheckout}>Order Now</span>
    </div>
  )
}

export default Cart

let styleContainer = {width:'70px', height:'70px', border:'#8c857a solid 1px', borderRadius:'15px 0 15px 0', padding:'15px 15px 0', position:'fixed', top:'45px', right:'25px', cursor:'pointer'};

let styleImage = {width:'30px', height:'30px', zIndex:'10'}

let styleChild = {position:'absolute', right:'25px', top:'5px', zIndex:'1', fontSize:'1.1rem', textAlign:'center', lineHeight:'120%', background:'#00800091', color:'white', borderRadius:'50%', width:'20px', height:'25px'}

let stylePrice = {position:'absolute', bottom:'0px', left:'0px', width:'100%', textAlign:'center'}

let styelCheckout = {position:'absolute', bottom:'-20px', left:'0px', fontSize:'.8rem', width:'100%', background:'#00800091', color:'white', padding:'1px 2px', borderRadius:'0 5px 0 5px'}
