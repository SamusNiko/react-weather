import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store;
