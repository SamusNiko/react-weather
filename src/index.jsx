import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

// const composeEnhancers = typeof window === 'object' &&
// (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
