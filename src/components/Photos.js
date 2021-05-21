import React from 'react';
import Photo from './Photo';
import './Photos.css';

export default class Photos extends React.Component {

    state = {
        photo: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                if (res.status !== 200) {
                    console.log(`Error respone ${res.status}`)
                }
                res.json()
                    .then(data => {
                        // let photos = data.slice(0, 10)
                        console.log(data)
                        this.setState({

                            photo: data.slice(0, 10)


                        })

                        // console.log(this.state.photo[2].url)
                        // console.log(this.state.photo[2])
                        // console.log(this.state.photo[2].title)
                    })
            }).catch((error) => `Error${error}`)

    }

    render() {




        return (
            <>
                <div className="photosWrap">
                    <div className="banner">Album</div>
                    <Photo photos={this.state.photo} />
                    {/* Comments components */}
                </div>
            </>
        )
    }



}

