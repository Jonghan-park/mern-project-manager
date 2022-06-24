import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Home from './pages/Home'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

const client = new ApolloClient({
  uri: 'https://project-manager-jonghan.netlify.app/graphql',
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
        <Route path='/projects/:id' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
