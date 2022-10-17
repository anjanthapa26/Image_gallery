import React from 'react';
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

const Item = ({image}) => {
    let imgData = {
        farmId: image.farm,
        serverId: image.server,
        id:image.id,
        secretId: image.secret
    }
    console.log(imgData.farmId);
    return ( 
        <>
        <div className='m-2 p-2'>
        </div>
        </>
     );
}
 
export default Item;