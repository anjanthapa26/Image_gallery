import './App.css';
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import ItemLists from './component/ItemLists';

function App() {

  const [images,setImages] = useState(null);
  const [err,setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('cars');
  const [queryData , setQueryData] = useState('');


  const apiKey = "4877378921aaa8d9fbb302d7bf4f5968";
  const secretKey = "09d2713405f2a475";
  const url = useMemo(() => {
    return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
  },[query]) 


  const upperButton = () => {
    if (queryData.length === 0) {
      alert('please enter the search data to get the result');
    }
    else {
      setQuery(queryData);
    }
  }

  const FixedClicked = (e) => {
    setQuery(e.target.textContent);
  }
// fetch the datas from the flicker api
  useEffect(() => {

    const getData = async() => {
      try {
        const response = await axios.get(url);
        setImages(response.data.photos.photo);
      }
      catch(err) {
        setErr(err.message)
      }
      finally {
        setLoading(false);
      }
    }
    getData();
  },[query]);
  return (
    <>

    <div className='flex flex-col items-center justify-center mt-[100px] h-[5rem]  '>
    <div className = 'm-5'>
    <input className='w-29 bg-[#EDEFF0] border-solid rounded' type='text' name='name' onChange={(e) => setQueryData(e.target.value)}/>
    <button className='btns inline-block' type= 'button' onClick={upperButton}>search</button>
    </div>
    <div>
    <button className='btns' type='button' onClick={FixedClicked}>Mountains</button>
    <button className='btns' type='button' onClick={FixedClicked}>Beaches</button>
    <button className='btns' type='button' onClick={FixedClicked}>Birds</button>
    <button className='btns' type='button' onClick={FixedClicked}>Food</button>
    </div>
    {err && <div> There is some error in api end point </div>}
    {loading && <div className='m-10'> please wait for a moment.... </div>}
    </div>
    {images && <ItemLists images ={images}/>}
    </>
  );
}

export default App;
