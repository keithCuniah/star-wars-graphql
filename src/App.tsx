import React, { useState } from 'react';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import ListerPage from './pages/ListerPage/ListerPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ErrorPageNotFound from './pages/ErrorPageNotFound/ErrorPageNotFound';
import { DetailPagesContext } from './contexts/DetailPagesContext.context';
import Layout from './components/layout/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      alert(`Graphql error ${message}`)
    );
  }
});

// ANCHOR: adapt the port depending on the graphql server port
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:55703/graphiql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => {
  const [previousDetailPages, setPreviousDetailPages] = useState<string[]>([
    '',
    '',
    '',
  ]);
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <DetailPagesContext.Provider
            value={{ previousDetailPages, setPreviousDetailPages }}
          >
            <Layout>
              <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/lister-page' element={<ListerPage />}></Route>
                <Route
                  path='/characters/:characterId'
                  element={<DetailPage />}
                ></Route>
                <Route path='*' element={<ErrorPageNotFound />} />
              </Routes>
            </Layout>
          </DetailPagesContext.Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
