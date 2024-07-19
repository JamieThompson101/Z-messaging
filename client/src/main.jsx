import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import NoMatch from './pages/NoMatch.jsx';
import App from './App.jsx';
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Profile from './pages/profile.jsx';
// import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
       {
        path: '/login',
        element: <Login />
      },
        {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);