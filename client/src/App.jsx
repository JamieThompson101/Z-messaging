import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div class="container">
            <div class="row navbar">
                <h1>Z-messaging</h1>
                <button class="profile-button">Profile</button>
            </div>
            <Outlet />
        </div>
    )
}