import React from 'react';
import Comments from './Comments';

class FetchComments extends React.Component {
    state = {
        comments: []
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments").then(response => {
            if (response.status !== 200) {
                console.log(`We have a problem! ${response.status}`);
            }
            response.json().then(data => {
                this.setState({
                    comments: data
                });
            });
        })
        console.log('DID MOUNT' + this.state.comments);
    }

    //editComment

    render() {
        const comments = this.state.comments;
        console.log('HERE IS YOUR FETCH' + this.state.comments);
        return (
            <>
                <Comments comments = {this.state.comments}/>
            </>
        );
    }
}

export default FetchComments;
