import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//You may add more middlewares to this array if needed
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;