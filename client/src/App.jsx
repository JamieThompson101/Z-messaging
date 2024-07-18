import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="row navbar">
            <h1>Z-messaging</h1>
            <button className="profile-button">Profile</button>
        </div>
        <Outlet />
        </div>
    </ApolloProvider>
  );
}

export default App;

        