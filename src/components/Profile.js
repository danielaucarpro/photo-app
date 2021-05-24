import React from 'react';
import './Profile.css';
import Edit from './Edit';

class Profile extends React.Component {
    state = {
        profileName: "theDeackardCain",
        name: 'Deackard Cain',
        description: 'Hello! Stay a while and listen!'
    }

    edit = () => {
        alert('hello')
        this.render = () => {
            return (
                <Edit></Edit>
            );
        }
    }

    render() {
        return (
            <>
                <div className='profile-container'>
                    <div className='profile-picture'>

                    </div>
                    <div className='profile-text'>
                        <span className='profile-span'>{this.state.profileName}</span>
                        <button onClick={this.edit} className='edit-btn'>Edit</button>
                        <div>
                            <p className='nameText'>{this.state.name}</p>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;