import React from 'react';
import Item from './Item';



// contains the lists of images obtained from the flicker api
const ItemLists = ({images}) => {
    console.log(images);
    return ( 
        <>
        <div className='w-full flex justify-center items-center h-full bg-[#0064C2]'>

            {images.map((image) => {
               return  <Item key={image.id} image={image}  />
            })}
        </div>
        </>

     );
}
 
export default ItemLists;