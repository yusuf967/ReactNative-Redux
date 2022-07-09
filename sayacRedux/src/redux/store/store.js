import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducerFunction} from '../reducer/counterReducer';
import thunk from 'redux-thunk';
const mainReducer=combineReducers({names:reducerFunction});

const store=createStore(mainReducer,applyMiddleware(thunk));

export {store}