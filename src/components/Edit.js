import React from 'react';
import Comment from './Comments';
import './Edit.css';

class Edit extends React.Component {
    state = {

    }


    render() {
        return (
            <>
                {/* <form>
                    <label className='input-container'>Company Phrase:
                        <input className='input'
                            type='text'
                            placeholder='Daniel...'
                            value={this.state.phraseInput}
                            onChange={(e) => this.setState({ phraseInput: e.target.value })}
                        />
                    </label>
                </form> */}
                <div>
                    <p>Name</p>
                    <p>Comment</p>
                </div>
                <button>Save</button>
            </>
        );
    }
}

export default Edit;