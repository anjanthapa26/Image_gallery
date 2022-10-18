import React from 'react';
import Item from './Item';



// contains the lists of images obtained from the flicker api
const ItemLists = ({images}) => {
    console.log(images);
    return ( 
        <>
        <div className='flex justify-center m-10 items-center flex-wrap'>

            {images.map((image) => {
               return  <Item key={image.id} image={image}  />
            })}
        </div>
        </>

     );
}
 
export default ItemLists;