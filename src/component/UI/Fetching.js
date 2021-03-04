import {useEffect, useState} from 'react'

const useFetching = (url) => {

  let [resault, setresault] = useState([]);
  let [error, seterror] = useState('');
  let [isPending, setisPending] = useState(false);

  useEffect(()=>{
    const abort = new AbortController();

    async function fetchData(){

      await fetch(url,{signal:abort.signal})
      .then(res =>{
        
        if(!res.ok){throw Error('faild');}
        setisPending(true)
        return res.json();
      })
      .then(data => {
        setresault(data);
        setisPending(false);
        seterror(null);
      })
      .catch(err =>{
        if(err.name === 'AbortError'){
          console.log('fetch aborte')
        }else{
          setisPending(false);
          seterror(err.message);
        }
      })
    }
    fetchData();
    return () => abort.abort();
  },[url])

  return {resault, isPending, error};
}

export default useFetching