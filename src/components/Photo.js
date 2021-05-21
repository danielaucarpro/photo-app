import React from 'react';

const Photo = (props) => {
   console.log(props.photos)

   return (
      
      props.photos.map((photo) => {

         return <div key={photo.id} id={photo.id} className="photo">
            <img src={photo.url} alt="" />
            <button className="deleteBtn" onClick={()=>props.delete(photo.id)}>Delete</button>
         </div>

      })
   )
}

export default Photo