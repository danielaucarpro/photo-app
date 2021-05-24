import React from 'react';
import Photo from './Photo';
import './Photos.css';
import PopUp from './PopUp';

export default class Photos extends React.Component {

    state = {
        photo: [],
        modal: false
    }

    close = (photoId) => {
        console.log(`close ${photoId}`)
        // const photo = this.state.photo.filter(p => p.id == photoId)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                if (res.status !== 200) {
                    console.log(`Error respone ${res.status}`)
                }
                res.json()
                    .then(data => {
                        console.log(data)
                        this.setState({
                            photo: data.slice(0, 10),
                            modal: false
                        })
                    })
            }).catch((error) => `Error${error}`)
    }

    modal = (photoId) => {
        console.log(`modal ${photoId}`)
        const photo = this.state.photo.filter(p => p.id === photoId)
        this.setState({
            photo: photo,
            modal: true
        })
    }

    deletePhoto = (photoId) => {
        console.log(`delete called ${photoId}`)
        console.log(this.state.photo[0].id)
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
                    {this.state.modal ? null :
                        <Photo photos={this.state.photo} delete={this.deletePhoto} modal={this.modal} />
                    }
                </div>
                {this.state.modal ? <PopUp photos={this.state.photo} close={this.close} /> : null}
            </>
        )
    }



}

