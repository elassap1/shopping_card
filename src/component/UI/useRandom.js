const useRandom =  (length) => {

  let price = [];
  for (let index = 0; index < length; index++) {

    let random = parseInt((Math.random()*10).toFixed(2));

    let prices = random<10? random + 10 : random;
    
    price[index] = prices+0.99;

  }

  return price;
}

export default useRandom;