export const getCurrentId = state => state.model.currentId;
export const getCurrentVersion = state => state.configData.currentVersion;
export const getPerson = state => state.model.person;
export const getUser = state => state.authData.loginData.user;
export const getSetOfVersion = state => state.userLocalSettings.setOfVersions;
export const getCurrentUuid = state => state.authData.uuid;
export const getModuleTheme = state => state.themes.theme.editModule;