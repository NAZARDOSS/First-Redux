import React from 'react';
import App from './components/Dashboard';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  
  <Provider store = {store}>
    <App />
  </Provider>
    
);
