import ActionTypes from '../../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_SELECTED_TAB_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.SET_SELECT_EDIT_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.SET_OF_CURRENT_KEY_STORE:
            return {
                ...state,
                ...action.payload,
            };

        default: {
            return state;
        }
    }
};