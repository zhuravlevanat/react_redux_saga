export const getVersions = state => state.userLocalSettings.setOfVersions;
export const getModuleTheme = state => state.themes.theme.headerModule;
export const getStatusModal = state => state.modalWindowData.showModal;
export const getCurrentVersion = state => state.configData.currentVersion;
export const getSearchKey = state => state.configData.searchKey;
export const getArrId = state => state.model.setOfId;
export const getUuid = state => state.authData.uuid;

