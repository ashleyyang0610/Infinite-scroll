import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(epicMiddleware, logger);

const store = createStore(rootReducer, composeEnhancers(middleware));

epicMiddleware.run(rootEpic);

export default store;
