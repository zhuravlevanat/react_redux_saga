import ActionTypes from '../../constants/actionTypes';
import model from '../model';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LIST_OF_PERSONS_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.CHANGE_LOGS_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.SET_CURRENT_ID_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.SET_PERSON_DATA_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.CHANGE_PERSON_DATA_STORE:
            return {
                ...state,
                person: {
                    ...state.person,
                    ...action.payload,
                },
            };

        case ActionTypes.SET_OF_ID_STORE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.INPUT_ADD_CHANGE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.INPUT_EDIT_CHANGE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.ADD_CHANGE_KEY:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.ADD_DELETE_KEY:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.DELETE_KEY_CURRENT:
            return {
                ...state,
            };

        default: {
            return state;
        }
    }
};