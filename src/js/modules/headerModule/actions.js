import ActionTypes from '../../constants/actionTypes';

export const changeCurrentVersion = payload => ({ type: ActionTypes.CHANGE_CURRENT_VERSION, payload });
export const logout = () => ({ type: ActionTypes.LOGOUT });
export const changeModalStatus = payload => ({ type: ActionTypes.CHANGE_MODAL_STATUS, payload });
export const setOfCurrentKey = () => ({ type: ActionTypes.SET_OF_CURRENT_KEY });
export const setOfId = () => ({ type: ActionTypes.SET_OF_ID });