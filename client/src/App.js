import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients'
import Projects from './components/Projects'
import AddClientModal from './components/AddClientModal'
import Home from './pages/Home'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(), 
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
