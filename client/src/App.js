import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
