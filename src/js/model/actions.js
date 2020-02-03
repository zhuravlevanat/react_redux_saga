import ActionTypes from '../constants/actionTypes';

export const changeAuthStateStore = payload => ({ type: ActionTypes.CHANGE_AUTH_STATE_STORE, payload });
export const changeLoginDataStore = payload => ({ type: ActionTypes.CHANGE_LOGIN_DATA_STORE, payload });
export const setErrorStore = payload => ({ type: ActionTypes.SET_ERROR_STORE, payload });
export const setCurrentUuidStore = payload => ({ type: ActionTypes.SET_CURRENT_UUID_STORE, payload });
export const setUserPermissionsStore = payload => ({ type: ActionTypes.SET_USER_PERMISSIONS_STORE, payload });
export const changeCurrentVersionStore = payload => ({ type: ActionTypes.CHANGE_CURRENT_VERSION_STORE, payload });
export const changeSelectedTabStore = payload => ({ type: ActionTypes.CHANGE_SELECTED_TAB_STORE, payload });
export const changeListOfPersons = () => ({ type: ActionTypes.CHANGE_LIST_OF_PERSONS });
export const changeListOfPersonsStore = payload => ({ type: ActionTypes.CHANGE_LIST_OF_PERSONS_STORE, payload });
export const changeLogs = () => ({ type: ActionTypes.CHANGE_LOGS });
export const changeLogsStore = payload => ({ type: ActionTypes.CHANGE_LOGS_STORE, payload });
export const setSelectEditStore = payload => ({ type: ActionTypes.SET_SELECT_EDIT_STORE, payload });
export const setCurrentIdStore = payload => ({ type: ActionTypes.SET_CURRENT_ID_STORE, payload });
export const setPersonDataStore = payload => ({ type: ActionTypes.SET_PERSON_DATA_STORE, payload });
export const changeModalStatusStore = payload => ({ type: ActionTypes.CHANGE_MODAL_STATUS_STORE, payload });
export const setOfCurrentKeyStore = payload => ({ type: ActionTypes.SET_OF_CURRENT_KEY_STORE, payload });
export const setOfIdStore = payload => ({ type: ActionTypes.SET_OF_ID_STORE, payload });
