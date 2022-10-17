import { combineReducers, createStore } from 'redux';
import chatReducer from './chatReducer';

let reducers = combineReducers({
	chat: chatReducer
});

let store = createStore(reducers);

export default store;