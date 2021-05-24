import React from 'react';
// import Edit from './Edit';
import './Comments.css';

class Comments extends React.Component {
    state = {
        list: [this.props.comments],
        id: this.props.comments.id,
        name: this.props.comments.name,
        body: this.props.comments.body,
        isEditOn: false
    }

    render() {
        return (
            <>
                {this.props.comments.map((comment) => {
                    return <div key={comment.id}>
                        <p className='comments-name'>{comment.name}: 
                        <span className='comments-body'> {comment.body}</span>
                        </p>
                    </div>
                })}
            </>
        )
    }
}

export default Comments;