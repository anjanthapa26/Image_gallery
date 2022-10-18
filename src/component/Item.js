import React from 'react';
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

const Item = ({image}) => {
    let imgData = {
        farmId: image.farm,
        serverId: image.server,
        id:image.id,
        secretId: image.secret
    }

    const imageStyle = {
        height: '250px',
        width: '250px'
    }
    let url = `https://farm${imgData.farmId}.staticflickr.com/${imgData.serverId}/${imgData.id}_${imgData.secretId}.jpg`
    console.log(imgData.id);
    return ( 
        <>
        <div className='m-2 p-2 bg-[#0064C2]'>
            <img src={url} alt='img' style={imageStyle}/>
        </div>
        </>
     );
}
 
export default Item;