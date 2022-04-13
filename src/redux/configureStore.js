import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import locationReducer from './location/locationReducer';
import settingsReducer from './settings/settingsReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  settings: settingsReducer
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
