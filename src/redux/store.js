import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const reducer = combineReducers(reducers);

const initialState = {
  phones: null,
  error: {
    phones: null
  }
};

const middlewares = [thunk];

// Use redux-logger only on development mode
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); // eslint-disable-line

  middlewares.push(logger);
}

// Configure a store that uses the defined middlewares
function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore();

export { store };
