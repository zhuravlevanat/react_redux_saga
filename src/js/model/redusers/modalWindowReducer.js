import ActionTypes from '../../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_MODAL_STATUS_STORE:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
            };

        default: {
            return state;
        }
    }
};