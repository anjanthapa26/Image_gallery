import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ItemLists from './component/ItemLists';

function App() {

  const [images,setImages] = useState(null);
  const [err,setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "4877378921aaa8d9fbb302d7bf4f5968";
  const secretKey = "09d2713405f2a475";
  let query = 'dogs'
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

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
  },[]);
  return (
    <>

    <div className='flex flex-col items-center justify-center mt-[100px] h-[5rem]  '>
    <div className = 'm-5'>
    <input className='w-29 bg-[#EDEFF0] border-solid rounded' type='text' name='name'/>
    <button className='btns inline-block' type= 'button'>search</button>
    </div>
    <div>
    <button className='btns' type='button'>Mountains</button>
    <button className='btns' type='button'>Beaches</button>
    <button className='btns' type='button'>Birds</button>
    <button className='btns' type='button'>Food</button>
    </div>
    {err && <div> There is some error in api end point </div>}
    {loading && <div className='m-10'> please wait for a moment.... </div>}
    {images && <ItemLists images ={images}/>}
    </div>
    </>
  );
}

export default App;
