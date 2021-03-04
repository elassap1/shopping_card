import React, {useState, useEffect} from 'react'
import useFetching from '../UI/Fetching'
import Search from '../UI/Search'
import Card from '../UI/Card'
import Cart from '../UI/Cart';
import CheckOut from '../UI/CheckOut';
import useRandom from '../UI/useRandom';

function Book() {

  const [value, setvalue] = useState('');
  const [url, seturl] = useState(10);
  const [more, setmore] = useState(10);
  const [Input, setInput] = useState([]);
  const [price, setprice] = useState([]);
  const [ProductCalcul, setProductCalcul] = useState([]);
  const [checkOut , setcheckOut] = useState(false);

  let prices = useRandom(100);
  
  let handlerInputs = () => {
    let input = [];

    for(let i = 0; i < 100; i++) {
      
      input[i] = 0;
    }
    
    setInput(input);
  };

  let {resault,isPending} = useFetching(url);

  let handlerChange = (e) => {

    let val = e.target.value;
    setvalue(val);
  }

  let handlerMoreResault = () => {
    let mores = more + 10;
    setmore(mores);
    seturl(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=${more}`);
  }

  let handlerOnCclick = () => {
    handlerInputs();
    if(value){
      seturl(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=${more}`);
      setprice(prices)
    }
  }

  let handlerProductCounter = (ids) => {
    let inputArray = [];
    let productCounter = 0 ;
    let productPrice = 0;
    let totalProduct = 0;
    let totalPrice = 0;
    
    if(resault.items)
    for (let index = 0; index < resault.items.length; index++) {

      let select = document.querySelectorAll(`input`)[index+1].previousSibling.previousSibling.innerHTML;
      let {id} = resault.items[index];
      if('c'+id===ids){

        inputArray[index] = Input[index] + 1;
      }
      else if('d'+id===ids){

        if(Input[index]>0){

          inputArray[index] = Input[index] - 1;
        }else{
          inputArray[index] = 0;
          }
        }
        else
        {
          inputArray[index] = Input[index];
        }
        productCounter = inputArray[index];
        totalProduct += productCounter;
        productPrice = parseFloat(select) * productCounter;
        totalPrice += productPrice;
      }
      setProductCalcul([totalProduct, totalPrice])

    setInput([...inputArray]);
  }

  let handlerCheckOut = () => {
    if(ProductCalcul[0]!==0)
    setcheckOut(true);
    if(checkOut){
      setcheckOut(false);
      setProductCalcul([0,0]);
      handlerInputs();
      window.open('./home', "_self")
    }
  }


  return (
    <div className='book' style={styleContainer}>

      {!checkOut
      ?<div>
        <Search value={value} change={handlerChange} click={handlerOnCclick} >Search Book</Search>
        
        {isPending?<div>Loding...</div>:null}
        
        {resault.items
          ?<Card data={resault} price={price} handlerCheckOut={handlerCheckOut} inputValue={Input} handlerInputProducts={handlerProductCounter} handlerMoreResault={handlerMoreResault}>
            <div style={styleMore} onClick={handlerMoreResault} >More Results</div>
          </Card>:<div style={styleEmpty}>No Book Ordering</div> 
        }
        <Cart handlerCheckOut={handlerCheckOut} ProductCalcul={ProductCalcul}>{0} </Cart>
      </div>
      
      :<CheckOut handlerCheckOut={handlerCheckOut} ProductCalcul={ProductCalcul} />
      }
    </div>
  )
}

export default Book;


let styleContainer = {background:'#f9f9f987', height:'100vh', padding:'70px 0',}

let styleEmpty = {width:'300px', margin:'10vh auto', fontSize:'2rem', color:'black'}

let styleMore = {width:'100%', color:'white', fontSize:'1.7rem', background:'#d8d8cd', textAlign:'center', marginTop:'30px', cursor:'pointer'}
