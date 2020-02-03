import { combineReducers } from 'redux';
import authReducer from '../model/redusers/authReducer';
import configReducer from '../model/redusers/configReducer';
import modelReducer from '../model/redusers/modelReducer';
import settingsReducer from '../model/redusers/settingsReducer';
import modalWindowReducer from '../model/redusers/modalWindowReducer';
import themesReducer from '../model/redusers/themesReducer';

const rootReducer = combineReducers({
    authData: authReducer,
    configData: configReducer,
    model: modelReducer,
    userLocalSettings: settingsReducer,
    modalWindowData: modalWindowReducer,
    themes: themesReducer,
});

export default rootReducer;
