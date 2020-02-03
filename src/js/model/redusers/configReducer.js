import ActionTypes from '../../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CURRENT_VERSION_STORE:
            return {
                ...state,
                ...action.payload,
            };

        default: {
            return state;
        }
    }
};