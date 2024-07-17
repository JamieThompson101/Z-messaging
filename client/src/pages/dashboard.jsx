import './dashboard.css';

function Dashboard() {
    return (
        <div className="row content">
            <div className="col-4 contacts">
                <div className="users-container">
                    <div className="search">
                        <input className="search-text" placeholder="Search"/>
                        <button type="button" className="search-btn">Search</button>
                    </div>
                    <ul className="users">
                        <li className="person">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                            <span className="status"></span>
                            <span className="name">John Doe</span>
                        </li>
                        <li className="person active">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                            <span className="status"></span>
                            <span className="name">Jane Doe</span>
                        </li>
                        <li className="person">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                            <span className="status"></span>
                            <span className="name">Jim Doe</span>
                        </li>
                        <li className="person">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                            <span className="status"></span>
                            <span className="name">Jerk Doe</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-8 chat">
                <div className="recipient">
                    <span className="name">Jane Doe</span>
                </div>
                <div className="chat-container">
                    <ul className="messages">
                        <li className="chat-left">
                            <div className="name-avatar">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                                <div className="chat-name">Jane Doe</div>
                            </div>
                            <div className="chat-message">
                                Hello, how are you?
                            </div>
                        </li>
                        <li className="chat-left">
                            <div className="name-avatar">
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"/>
                                <div className="chat-name">Jimathy Doe</div>
                            </div>
                            <div className="chat-message">
                                I'm well, and you?
                            </div>
                        </li>
                    </ul>
                    <div className="text">
                        <textarea className="chat-text" placeholder="Z-messaging"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;