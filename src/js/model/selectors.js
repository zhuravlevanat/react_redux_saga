export const getCurrentUuid = state => state.authData.uuid;
export const getCurrentVersion = state => state.configData.currentVersion;
export const getSelectedTab = state => state.userLocalSettings.selectedTab;
export const getLoginData = state => state.authData.loginData;
export const getCurrentId = state => state.model.currentId;
export const getPerson = state => state.model.person;
export const getUser = state => state.authData.loginData.user;
export const getSetOfVersion = state => state.userLocalSettings.setOfVersions;
export const getSetOfId = state => state.model.setOfId;
export const getCurrentKeys = state => state.userLocalSettings.setOfCurrentKey;
export const getSearchKey = state => state.configData.searchKey;
export const getChangeKey = state => state.model.changeKey;
export const getDeleteKey = state => state.model.deleteKey;

