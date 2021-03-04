import React from 'react'
import Input from './Input'

function Payment(props) {

  let {payment} = props;

  return (
    <div>

      {(payment==='visa'||payment==='master')&&<div style={styleContainer}>
        <label style={{display:'block'}} htmlFor="#cart">Cart Name</label>
        <Input styles={styleInput} id={'cart'} type={'text'} />
        <label style={{display:'block'}} htmlFor="#date">Date Expired</label>
        <Input styles={styleInput} id={'date'} type={'date'} />
        </div>
      }

        {(payment==='paypal'||payment==='netller')&&<div style={styleContainer}>
          <label style={styleInput} htmlFor="#paypal">{payment} Email</label>
          <Input id={'paypal'} styles={styleInput} type={'email'} />
          </div>
        }

        {payment==='bank'&&<div style={styleContainer}>
          <label style={styleInput} htmlFor="#bank">Account Bank</label>
          <Input id={'bank'} styles={styleInput} type={'number'} />
          </div>
        }

    </div>
  )
}

export default Payment

let styleInput = { width:'200px', textAlign:'center', height:'30px', marginTop:'10px', fontSize:'1.2rem', border:'none'}

let styleContainer = {width:'100%', display:'block', textAlign:'center', margin:'10px auto'}
