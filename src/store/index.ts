import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { postsReducer } from './posts';
import { expandedPostReducer } from './expanded-post';

const reducers = {
  posts: postsReducer,
  expandedPost: expandedPostReducer,
};

const rootReducer = combineReducers(reducers);

const middlewares = [thunk];

const composedEnhancers = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, composedEnhancers);
