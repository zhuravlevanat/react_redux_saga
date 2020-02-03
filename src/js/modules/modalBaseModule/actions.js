import ActionTypes from '../../constants/actionTypes';

export const changeModalStatus = payload => ({ type: ActionTypes.CHANGE_MODAL_STATUS, payload });
export const inputAddChange = payload => ({ type: ActionTypes.INPUT_ADD_CHANGE, payload });
export const inputEditChange = payload => ({ type: ActionTypes.INPUT_EDIT_CHANGE, payload });
export const addNewKey = payload => ({ type: ActionTypes.ADD_NEW_KEY, payload });
export const addNewKeyAll = payload => ({ type: ActionTypes.ADD_NEW_KEY_ALL, payload });
export const handleChangeKey = payload => ({ type: ActionTypes.ADD_CHANGE_KEY, payload });
export const changeKeyCurrent = payload => ({ type: ActionTypes.CHANGE_KEY_CURRENT, payload });
export const changeKeyAll = payload => ({ type: ActionTypes.CHANGE_KEY_ALL, payload });
export const handleDeleteKey = payload => ({ type: ActionTypes.ADD_DELETE_KEY, payload });
export const deleteKeyCurrent = () => ({ type: ActionTypes.DELETE_KEY_CURRENT });
export const deleteKeyAll = () => ({ type: ActionTypes.DELETE_KEY_ALL });