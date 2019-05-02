import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import weatherReducer from '@reducers/weather';


const store = createStore(weatherReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;
