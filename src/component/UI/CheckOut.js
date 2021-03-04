import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import Payment from './Payment';

function CheckOut(props) {
  let {handlerCheckOut, ProductCalcul} = props;

  const [payment ,setpayment] = useState('');

  let handlerCheck = (e) => {

    let method = e.target.id;

    setpayment(method);

  }

  return (
    <div style={styleContainer}>
      <span style={styleBack} onClick={handlerCheckOut}>X</span>
      <label style={styleInput} htmlFor="#name">Full Name</label>
      <Input styles={styleInput} id={'name'} type={'text'} />
      <label style={styleInput} htmlFor="#address">Address</label>
      <Input styles={styleInput} id={'address'} type={'text'} />

      <div style={stylePayment}>
        <label htmlFor="#paypal">Paypal</label>
        <label htmlFor="#netller">Netller</label>
        <label htmlFor="#visa">Visa</label>
        <label htmlFor="#master">Master</label>
        <label htmlFor="#bank">Bank</label>
        
        <input id='paypal' type="radio" name='payment' onChange={handlerCheck} />
        <input id='netller' type="radio" name='payment' onChange={handlerCheck} />
        <input id='visa' type="radio" name='payment' onChange={handlerCheck} />
        <input id='master' type="radio" name='payment' onChange={handlerCheck} />
        <input id='bank' type="radio" name='payment' onChange={handlerCheck} />
      </div>

      <Payment payment={payment} />

      <div style={{margin:'15px 0 10px'}}>Order Cost <span style={styleCost}>{ProductCalcul[1]+' $'}</span> </div>

      <Button styles={styleButton} handler={handlerCheckOut} >Submit</Button>
    </div>
  )
}

export default CheckOut

let styleContainer = {position:'relative', background:'#635959', color:'white', borderRadius:'10px', width:'300px', display:'flex', flexWrap:'wrap', justifyContent:'center', padding:'20px 0', margin:'10vh auto'}

let styleInput = { width:'200px', textAlign:'center', height:'30px', marginTop:'5px', borderRadius:'10px', fontSize:'1.2rem', border:'none'}

let styleButton = {position:'absolute', bottom:'-30px', width:'305px', textAlign:'center', background:'green', color:'white', fontSize:'1.3rem', cursor:'pointer', height:'40px'}

let stylePayment = {display:'grid', gridTemplateColumns:'repeat(5, 1fr)',gap:'5px', justifyContent:'center', margin:'30px 0 10px'}

let styleBack = {background:'red', width:'25px', height:'25px', position:'absolute', top:'-10px', right:'-5px', borderRadius:'5px', textAlign:'center', fontSize:'1.4rem', lineHeight:'100%', cursor:'pointer'}

let styleCost = {textAlign:'center', background:'#8a6b6b', padding:'5px 15px', marginTop:'10px', borderRadius:'10px'}
