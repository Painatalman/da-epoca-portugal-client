import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, createHttpLink, ApolloClient } from '@apollo/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://da-epoca-portugal-api.herokuapp.com/'
  }),
  cache: new InMemoryCache() 
});

ReactDOM.render(
  <Provider store={store}>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
