import ActionTypes from '../../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LOGIN_DATA_STORE:
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    ...action.payload,
                },
            };
        case ActionTypes.SET_ERROR_STORE:
            return {
                ...state,
                errorData: {
                    ...state.errorData,
                    ...action.payload,
                },
            };
        case ActionTypes.SET_CURRENT_UUID_STORE:
            return {
                ...state,
                ...action.payload,
            };
        case ActionTypes.SET_USER_PERMISSIONS_STORE:
            return {
                ...state,
                userPermissions: {
                    ...state.userPermissions,
                    ...action.payload,
                },
            };
        case ActionTypes.CHANGE_AUTH_STATE_STORE:
            return {
                ...state,
                ...action.payload,
            };
        default: {
            return state;
        }
    }
};