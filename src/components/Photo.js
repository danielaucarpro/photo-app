  
import React from 'react';
import './Photo.css';


export default class Photo extends React.Component {

   render() {
      return (

         this.props.photos.map((photo) => {

            return <>
               <div key={photo.id} id={photo.id} className="photo">
                  {/* <a href={photo.url}> */}
                  <img className='photo-image' onClick={()=>this.props.modal(photo.id)} src={photo.url} alt="" />
                  <div className='middle'>

                  </div>
                  {/* </a> */}
                  <button className="deleteBtn" onClick={() => this.props.delete(photo.id)}>Delete</button>
               </div>
            
            </>
         })
      )
   }
}