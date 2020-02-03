import ActionTypes from '../../constants/actionTypes';

export const changePersonDataStore = payload => ({ type: ActionTypes.CHANGE_PERSON_DATA_STORE, payload });
export const saveChangeEditForm = () => ({ type: ActionTypes.SAVE_CHANGE_EDIT_FORM_SAGA });
export const mergeChangeEditForm = () => ({ type: ActionTypes.MERGE_CHANGE_EDIT_FORM_SAGA });
export const setSelectEditStore = payload => ({ type: ActionTypes.SET_SELECT_EDIT_STORE, payload });
