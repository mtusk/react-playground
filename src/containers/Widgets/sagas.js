import { takeLatest, call, put } from 'redux-saga/effects';

import { getWidgetsLoaded, getWidgetsError } from './actions';

import {
  GET_WIDGETS,
} from './constants';

const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);
  fetchRequest.headers.append('X-UserId', 'TODO');
  fetchRequest.headers.append('X-SourceSystem', 'TODO');
  fetchRequest.headers.append('Accept', 'application/json');

  return fetch(fetchRequest)
    .then(response => response
      .json()
      .then(result => ({ widgets: result.widgets })))
    .catch(error => ({ error }));
};

function* getWidgets() {
  const baseUri = 'http://localhost:2309'; // TODO make this a configurable constant
  const { widgets, error } = yield call(fetchData, `${baseUri}/widgets`, { method: 'get' });

  if (error) {
    yield put(getWidgetsError(error));
  }

  yield put(getWidgetsLoaded(widgets));
}

function* apiData() { // TODO what to call this?
  yield takeLatest(GET_WIDGETS, getWidgets);
}

export default apiData;
