import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="container">
            <div className="row navbar">
                <h1>Z-messaging</h1>
                <button className="profile-button">Profile</button>
            </div>
            <Outlet />
        </div>
    )
}

export default App;