import React from 'react';

const Photo = (props) => {
   console.log(props.photos)


   return (

      props.photos.map((photo) => {
         console.log(photo.url)

         return <div key={photo.id} className="photo">
            <img  src={photo.url} alt="" />
            <button className="deleteBtn">Delete</button>
         </div>

      })


   )








}

export default Photo