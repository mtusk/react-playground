import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from './constants';

const initialState = {
  apiData: null,
  apiDataLoading: null,
  apiDataLoaded: null,
  apiDataError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return {
        ...state,
        apiDataLoading: true,
        widgetsError: null,
      };
    case GET_API_DATA_LOADED:
      return {
        ...state,
        widgets: action.data,
        apiDataLoading: false,
        apiDataLoaded: true,
        widgetsError: null,
      };
    case GET_API_DATA_ERROR:
      return {
        ...state,
        apiDataLoading: false,
        apiDataLoaded: false,
        apiDataError: action.error,
      };
    default:
      return state;
  }
};

export default appReducer;
