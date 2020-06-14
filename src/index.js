import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://indstry.herokuapp.com/v1/graphql',
})


ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
