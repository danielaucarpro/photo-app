import React from 'react';


export default class Photo extends React.Component {

   render() {
      return (

         this.props.photos.map((photo) => {

            return <>
               <div key={photo.id} id={photo.id} className="photo">
                  {/* <a href={photo.url}> */}
                  <img onClick={()=>this.props.modal(photo.id)} src={photo.url} alt="" />
                  {/* </a> */}
                  <button className="deleteBtn" onClick={() => this.props.delete(photo.id)}>Delete</button>
               </div>
            
            </>
         })
      )
   }
}

