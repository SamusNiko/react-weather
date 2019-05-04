import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import weatherReducer from '@/reducers';

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
