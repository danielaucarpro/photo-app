import React from 'react';
import Photo from './Photo';
import './Photos.css';

export default class Photos extends React.Component {

    state = {
        photo: []
    }

    deletePhoto = (photoId) => {
        console.log (`delete called ${photoId}`)
        console.log (this.state.photo[0].id)
        const photo = this.state.photo.filter(p => p.id !== photoId)
      
        this.setState({
            photo: photo
        })

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                if (res.status !== 200) {
                    console.log(`Error respone ${res.status}`)
                }
                res.json()
                    .then(data => {
                        console.log(data)
                        this.setState({
                            photo: data.slice(0, 10)
                        })
                    })
            }).catch((error) => `Error${error}`)

    }

    render() {
        return (
            <>
                <div className="photosWrap">
                    <div className="banner">Album</div>
                    <Photo  photos={this.state.photo} delete={this.deletePhoto} />
                    {/* Comments components */}
                </div>
            </>
        )
    }



}

