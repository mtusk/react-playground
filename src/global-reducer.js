import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import widgetsReducer from './containers/Widgets/reducer';

const containersReducer = {
  containers: combineReducers({
    widgetsReducer,
    // NOTE: put other app reducers here
  }),
};

const rootReducer = combineReducers({
  ...containersReducer,
  routing: routerReducer,
});

export default rootReducer;
