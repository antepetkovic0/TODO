import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { todosReducer } from './reducers/todos';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    todosReducer, 
    composeEnhancer(applyMiddleware(thunk)), 
);