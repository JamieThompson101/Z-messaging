import { useState } from 'react';
// import { useSelector } from 'react-redux';
import './profile.css';
// week 21 25 src/pages/profile.jsx
// set up token stuff from ^ app.jsx

const Profile = () => {
    // const state = useSelector((state) => state);
    return (
        <div className="row profile">
            <div className="card">
                <button className="pfp">Profile</button>
                <span className="name">Jane Doe</span>
                <span className="userId">@jd743</span>
                <button className="edit">Edit Profile</button>
                <span className="userInfo">Insert user information</span>
            </div>
        </div>
    )
}

export default Profile;