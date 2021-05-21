import React from 'react';
import Comments from './Comments';

class FetchComments extends React.Component {
    state = {
        comments: []
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            if (response.status !== 200) {
                console.log(`We have a problem! ${response.status}`);
            }
            response.json()
            .then(data => {
                console.log(data)
                this.setState({
                    comments: data.slice(0, 10)
                });
            });
        })
        .catch((error)=>{
            console.log((`Error ${error}`))
        })
    }



    render() {

        return (
            <>
                <Comments comments={this.state.comments} />
            </>
        )
    }
}

export default FetchComments;
