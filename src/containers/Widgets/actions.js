import {
  GET_WIDGETS,
  GET_WIDGETS_LOADED,
  GET_WIDGETS_ERROR,
} from './constants';

export const getWidgets = () => ({
  type: GET_WIDGETS,
});

export const getWidgetsLoaded = data => ({
  type: GET_WIDGETS_LOADED,
  data,
});

export const getWidgetsError = error => ({
  type: GET_WIDGETS_ERROR,
  error,
});
