import { createStore } from 'redux';
import RootReducer from './RootReducer';

let store = createStore(RootReducer);

export default store;
