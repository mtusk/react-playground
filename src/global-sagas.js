import { fork, all } from 'redux-saga/effects';

import appSagas from './containers/App/sagas';
import widgetSagas from './containers/Widgets/sagas';

const sagas = [
  appSagas,
  widgetSagas,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
