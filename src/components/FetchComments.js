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
    }

    showJson(){
        const comments = this.state.comments;
        console.log(comments);
    }
    //editComment

    render() {
        const comments = this.state.comments;
        console.log(comments);
        return (
            <>
                {/* <Comments/> */}
            </>
        );
    }
}

export default FetchComments;
