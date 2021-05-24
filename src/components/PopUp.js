import React from 'react';

import Comments from './FetchComments';

import './Photos.css';

export default class PopUp extends React.Component {

    render() {
        return (

            this.props.photos.map((photo) => {

                return <>
                    <div key={photo.id} id={photo.id} className="modalWrap">
                        <div className="modal">
                            <img src={photo.url} alt="" />
                            <button className="closeBtn" onClick={() => this.props.close(photo.id)}>Close</button>
                            <div className='comments-container'>
                                <Comments />
                            </div>
                        </div>
                    </div>
                </>
            })
        )
    }
}