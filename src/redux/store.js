import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

//You may add more middlewares to this array if needed
const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };