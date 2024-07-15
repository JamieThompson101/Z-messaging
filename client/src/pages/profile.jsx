import { useState } from 'react';
import { useSelector } from 'react-redux';
// week 21 25 src/pages/profile.jsx
// set up token stuff from ^ app.jsx

const Profile = () => {
    const state = useSelector((state) => state);
    return (
        <div className="row profile">
            <div className="card">
                <button className="pfp">Profile</button>
                <span className="name">{state.user.firstName}  {state.user.lastName}</span>
                <span className="userId">@jd743</span>
                <button className="edit">Edit Profile</button>
                <span className="userInfo">Insert user information</span>
            </div>
        </div>
    )
}

export default Profile;