import ActionTypes from '../../constants/actionTypes';

export const changeLoginData = payload => ({ type: ActionTypes.CHANGE_LOGIN_DATA_STORE, payload });
export const changeAuthState = payload => ({ type: ActionTypes.CHANGE_AUTH_STATE, payload });
