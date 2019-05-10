import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Weather from '@/containers/Weather';
import store from './store';

import './index.css';

require('dotenv').config();

const app = (
  <Provider store={store}>
    <Weather />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
