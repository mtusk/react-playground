import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from './global-reducer';
import globalSagas from './global-sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = (initialState, history) => {
  let store = {};

  let devTools = f => f;
  if (window.devToolsExtension) {
    devTools = window.devToolsExtension;
  }

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    logger,
  ];

  const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(createStore);

  store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    devTools());

  sagaMiddleware.run(globalSagas);

  return store;
};

export default configureStore;
