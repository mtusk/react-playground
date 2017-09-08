export const selectWidgetsContainer = state => state.containers.widgetsReducer;
export const selectWidgets = state => selectWidgetsContainer(state).widgets;
