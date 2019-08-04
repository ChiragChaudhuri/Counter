import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {count} from './Reducers/index';
import thunk from 'redux-thunk';
export const createmyStore=()=>createStore(count,applyMiddleware(thunk,logger));