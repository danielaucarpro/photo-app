import React from 'react';
import './Comments.css';

const Comments = (props) => {
    console.log('YOUR ARE IN COMMENT COMPONENT ' + props.comments);
    return (
        props.comments.map((comment) => {
            console.log(comment.id);
            return <div key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
            </div>
        })
    )
}

export default Comments;