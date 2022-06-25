import {createStore,combineReducers} from 'redux';
import {reducerFunction} from '../reducer/counterReducer';

const mainReducer=combineReducers({count:reducerFunction});

const store=createStore(mainReducer);

export {store}