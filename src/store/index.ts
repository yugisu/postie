import thunk from 'redux-thunk';

import { postsReducer } from './posts';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const reducers = {
  posts: postsReducer,
};

const rootReducer = combineReducers(reducers);

const middlewares = [thunk];

const composedEnhancers = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, composedEnhancers);
