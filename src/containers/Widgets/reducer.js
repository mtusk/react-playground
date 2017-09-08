import {
  GET_WIDGETS,
  GET_WIDGETS_LOADED,
  GET_WIDGETS_ERROR,
} from './constants';

const initialState = ({ // TODO refactor out into one big initial state class
  widgets: [],
  widgetsLoading: null,
  widgetsLoaded: null,
  widgetsError: null,
});

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WIDGETS:
      return {
        ...state,
        widgetsLoading: true,
        widgetsError: null,
      };
    case GET_WIDGETS_LOADED:
      return {
        ...state,
        widgets: action.data,
        widgetsLoading: false,
        widgetsLoaded: true,
        widgetsError: null,
      };
    case GET_WIDGETS_ERROR:
      return {
        ...state,
        widgetsLoading: false,
        widgetsLoaded: false,
        widgetsError: action.error,
      };
    default:
      return state;
  }
};

export default widgetsReducer;
