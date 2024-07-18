import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login.jsx';
import NoMatch from './pages/NoMatch.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/dashboard.jsx';
// import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: '/login',
        element: <Login />
      },
        {
        path: '/dashboard',
        element: <Dashboard />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);