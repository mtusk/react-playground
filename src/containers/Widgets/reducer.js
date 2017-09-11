import {
  GET_WIDGETS,
  GET_WIDGETS_LOADED,
  GET_WIDGETS_ERROR,
} from './constants';

const initialState = ({
  widgets: [],
  widgetsLoading: null,
  widgetsLoaded: null,
  widgetsError: null,
});

const widgetsReducer = (state = initialState, action) => {
  let reduction = state;

  if (action) { // TODO I don't think I should have to do this...
    switch (action.type) {
      case GET_WIDGETS:
        reduction = {
          ...state,
          widgetsLoading: true,
          widgetsError: null,
        };
        
        break;
      case GET_WIDGETS_LOADED:
        reduction = {
          ...state,
          widgets: action.data,
          widgetsLoading: false,
          widgetsLoaded: true,
          widgetsError: null,
        };

        break;
      case GET_WIDGETS_ERROR:
        reduction = {
          ...state,
          widgetsLoading: false,
          widgetsLoaded: false,
          widgetsError: action.error,
        };

        break;
      default:
        reduction = state;

        break;
    }
  }

  return reduction;
};

export default widgetsReducer;
