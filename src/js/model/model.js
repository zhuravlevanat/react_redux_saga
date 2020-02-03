import ActionTypes from '../constants/actionTypes';
import {
    takeEvery,
    put,
    select,
    delay,
} from 'redux-saga/effects';
import * as selectors from './selectors';
import * as actions from './actions';
import * as requests from '../helpers/axiosRequests';
import Strings from '../strings/en';
import { changesInPerson } from './logic';
import { postDBRequest } from '../helpers/axiosRequests';

export default function* watchLoginModuleSaga() {
    yield takeEvery(ActionTypes.CHANGE_AUTH_STATE, changeAuthState);
    yield takeEvery(ActionTypes.SET_ERROR, setError);
    yield takeEvery(ActionTypes.SET_USER_PERMISSIONS, setUserPermissions);
    yield takeEvery(ActionTypes.SET_CURRENT_UUID, setCurrentUuid);
    yield takeEvery(ActionTypes.CHANGE_CURRENT_VERSION, changeCurrentVersion);
    yield takeEvery(ActionTypes.CHANGE_LIST_OF_PERSONS, changeListOfPersons);
    yield takeEvery(ActionTypes.CHANGE_LOGS, changeLogs);
    yield takeEvery(ActionTypes.CHANGE_SELECTED_TAB, changeSelectedTab);
    yield takeEvery(ActionTypes.SET_PERSON_DATA, setPersonData);
    yield takeEvery(ActionTypes.SAVE_CHANGE_EDIT_FORM_SAGA, savePersonData);
    yield takeEvery(ActionTypes.MERGE_CHANGE_EDIT_FORM_SAGA, mergePersonData);
    yield takeEvery(ActionTypes.LOGOUT, logout);
    yield takeEvery(ActionTypes.CHANGE_MODAL_STATUS, changeModalStatus);
    yield takeEvery(ActionTypes.SET_OF_ID, setOfId);
    yield takeEvery(ActionTypes.SET_OF_CURRENT_KEY, setCurrentKey);
    yield takeEvery(ActionTypes.ADD_NEW_KEY, addNewKey);
    yield takeEvery(ActionTypes.ADD_NEW_KEY_ALL, addNewKeyAll);
    yield takeEvery(ActionTypes.CHANGE_KEY_CURRENT, changeKeyCurrent);
    yield takeEvery(ActionTypes.CHANGE_KEY_ALL, changeKeyAll);
    yield takeEvery(ActionTypes.DELETE_KEY_CURRENT, deleteKeyCurrent);
    yield takeEvery(ActionTypes.DELETE_KEY_ALL, deleteKeyAll);
}

export function* changeAuthState() {
    try {
        const loginData = yield select(selectors.getLoginData);
        const { uuid, data } = yield requests.postDBRequest('/login', loginData);

        if (uuid) {
            yield setUserPermissions(data.grants);
            yield setCurrentUuid(uuid);
        }

        window.history.pushState(null, null, `?uuid=${uuid}`);

        yield put(actions.changeListOfPersons());
        yield put(actions.changeAuthStateStore({ isLoggedSuccessfully: true }));
        yield put(actions.changeLoginDataStore({
            database: '',
            table: '',
            password: '',
        }));
    } catch (err) {
        yield setError(true, err.message);
        yield delay(3000);
        yield setError(false, '');
    }
}

export function* setUserPermissions(grants) {
    const permission = grants.slice(0, grants.indexOf('*')).trim();

    if (permission.includes('SELECT')) {
        yield put(actions.setUserPermissionsStore({ read: true }));
    } else if (permission.includes('CREATE')) {
        yield put(actions.setUserPermissionsStore({ create: true }));
    } else if (permission.includes('INSERT')) {
        yield put(actions.setUserPermissionsStore({ write: true }));
    } else {
        yield put(actions.setUserPermissionsStore({ read: true, write: true, create: true }));
    }
}

export function* setCurrentUuid(uuid) {
    yield put(actions.setCurrentUuidStore({ uuid }));
}

export function* setError(val, err) {
    yield put(actions.setErrorStore({ isError: val, errorMessage: err }));
}

export function* changeCurrentVersion(version) {
    yield put(actions.changeCurrentVersionStore({ currentVersion: version.payload }));
    yield showListLogs();
}

export function* changeSelectedTab(tab) {
    yield put(actions.changeSelectedTabStore({ selectedTab: tab.payload }));
    yield showListLogs();
}

export function* showListLogs() {
    const tab = yield select(selectors.getSelectedTab);

    if (tab === Strings.resources.editorTabName) {
        yield put(actions.changeListOfPersons());
    } else if (tab === Strings.resources.logsTabName) {
        yield put(actions.changeLogs());
    }
}

export function* changeListOfPersons() {
    try {
        const currentVersion = yield select(selectors.getCurrentVersion);
        const currentUuid = yield select(selectors.getCurrentUuid);
        const list = yield getListOfPersons(currentVersion, currentUuid);
        yield put(actions.changeListOfPersonsStore({ list }));
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export function* changeLogs() {
    try {
        const currentVersion = yield select(selectors.getCurrentVersion);
        const currentUuid = yield select(selectors.getCurrentUuid);
        const logs = yield getLogsData(currentVersion, currentUuid);
        yield put(actions.changeLogsStore({ logs }));
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export function* setPersonData(action) {
    const id = action.payload;
    const uuid = yield select(selectors.getCurrentUuid);
    const version = yield select(selectors.getCurrentVersion);
    try {
        const { data } = yield requests.getDBRequest(`/personByID?uuid=${uuid}&version=${version}&id=${id}`);
        if (data) {
            yield put(actions.setPersonDataStore({ person: data }));
            yield put(actions.setCurrentIdStore({ currentId: id }));
            yield put(actions.setSelectEditStore({ selectEdit: 'Edit' }));
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export function* savePersonData() {
    const id = yield select(selectors.getCurrentId);
    const version = yield select(selectors.getCurrentVersion);
    const person = yield select(selectors.getPerson);
    try {
        yield updatePersonData(id, version, person);
    } catch (err) {
        console.error(err);
    }
    yield put(actions.setSelectEditStore({ selectEdit: 'List' }));
    yield put(actions.changeListOfPersons());
}

export function* mergePersonData() {
    const id = yield select(selectors.getCurrentId);
    const person = yield select(selectors.getPerson);
    const versionArr = yield select(selectors.getSetOfVersion);
    try {
        for (let version of versionArr) {
            yield updatePersonData(id, version, person);
        }
    } catch (err) {
        console.error(err);
    }
    yield put(actions.setSelectEditStore({ selectEdit: 'List' }));
    yield put(actions.changeListOfPersons());
}

export function* updatePersonData(id, version, body) {
    const oldPersonData = yield getPersonData(id, version);
    const uuid = yield select(selectors.getCurrentUuid);
    const user = yield select(selectors.getUser);
    try {
        const resp = yield requests.postDBRequest(`/updatePerson?uuid=${uuid}&version=${version}&id=${id}`, body);
        if (resp) {
            if (resp.data.changedRows > 0) { // if person data change
                const arrOfChange = changesInPerson(oldPersonData, body, user);
                const result = yield updateLogsData(version, arrOfChange);
                // console.log(result);
                // return result.data;
            }
        }
    } catch (err) {
        console.error(err);
    }
}

export function* getPersonData(id, version) { //вызов данных по id и version
    const uuid = yield select(selectors.getCurrentUuid);
    try {
        const { data } = yield requests.getDBRequest(`/personByID?uuid=${uuid}&version=${version}&id=${id}`);
        if (data) {
            return data;
        }
    } catch (err) {
        console.error(err);
    }
}

export function* updateLogsData(version, bodyArr) {
    const uuid = yield select(selectors.getCurrentUuid);
    let url = `/updateLogs?uuid=${uuid}&version=${version}`;
    try {
        yield requests.postDBRequest(url, bodyArr);
    } catch (err) {
        console.error(err);
    }
}

function* logout() {
    try {
        const currentUuid = yield select(selectors.getCurrentUuid);
        const response = yield requests.postDBRequest(`/logout?uuid=${currentUuid}`, null);

        if (response.isError) {
            console.error(response.data);
            throw response.data;
        }

        window.history.pushState(null, null, `/`);

        yield put(actions.setCurrentUuidStore({ uuid: '' }));
        yield put(actions.changeLoginDataStore({ user: '' }));
        yield put(actions.setUserPermissionsStore({ read: false, write: false, create: false }));
        yield put(actions.changeAuthStateStore({ isLoggedSuccessfully: false }));
        yield put(actions.changeCurrentVersionStore({ currentVersion: 'variant1' }));
        yield put(actions.changeListOfPersonsStore({ list: [] }));
        yield put(actions.changeLogsStore({ logs: [] }));
        yield put(actions.setPersonDataStore({ person: {} }));
        yield put(actions.changeSelectedTabStore({ selectedTab: Strings.resources.editorTabName }));
        yield put(actions.setSelectEditStore({ selectEdit: 'List' }));
        yield put(actions.setCurrentIdStore({ currentId: 1 }));
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getListOfPersons = async (version, uuid) => {
    try {
        const { data } = await requests.getDBRequest(`/person?uuid=${uuid}&version=${version}`);
        return data;
    } catch (err) {
        throw err;
    }
};

const getLogsData = async (version, uuid) => {
    try {
        const { data } = await requests.getDBRequest(`/personLog?uuid=${uuid}&version=${version}`);
        return data;
    } catch (err) {
        throw err;
    }
};

export function* changeModalStatus(action) {
    yield put(actions.changeModalStatusStore({ showModal: action.payload }));
}

function* setOfId() {
    const uuid = yield select(selectors.getCurrentUuid);
    const version = yield select(selectors.getCurrentVersion);
    try {
        const { data } = yield requests.getDBRequest(`/personIds?uuid=${uuid}&version=${version}`);
        if (data) {
            let idArr = data.map(item => item.id);
            // console.info('id: ' + JSON.stringify(idArr));
            // console.info('id: ' + idArr);
            yield put(actions.setOfIdStore({ setOfId: idArr }));
            return idArr;
        }
    } catch (err) {
        console.error(err);
    }
}

function* setCurrentKey() {
    const uuid = yield select(selectors.getCurrentUuid);
    const version = yield select(selectors.getCurrentVersion);
    const setOfId = yield select(selectors.getSetOfId);
    // console.info('ID:' + JSON.stringify(setOfId));
    const id = setOfId[0];
    try {
        const { data } = yield requests.getDBRequest(`/personByID?uuid=${uuid}&version=${version}&id=${id}`);
        if (data) {
            // console.info('keys: ' + Object.keys(data));
            yield put(actions.setOfCurrentKeyStore({ setOfCurrentKey: Object.keys(data) }));
        }
    } catch (err) {
        console.error(err);
    }
}

function* addNewKey(action) {
    console.info(action.payload);
    const newKey = action.payload;
    const currentKeys = yield select(selectors.getCurrentKeys);
    const setOfId = yield select(selectors.getSetOfId);
    const currentVersion = yield select(selectors.getCurrentVersion);
    console.info('SSS: '+ currentKeys.indexOf(newKey));
    if (currentKeys.indexOf(newKey) == -1) {
        console.info('новый');
        for (let id of setOfId) {
            const person = yield getPersonData(id, currentVersion);
            person[newKey] = '';
            yield setNewPerson(id, currentVersion, person);
        }
        yield setCurrentKey();
    } else {
        console.info('совпадение');
    }
}

function* addNewKeyAll(action) {
    console.info(action.payload);
    const newKey = action.payload;
    const currentKeys = yield select(selectors.getCurrentKeys);
    const setOfId = yield select(selectors.getSetOfId);
    const setOfVersion = yield select(selectors.getSetOfVersion);
    const currentVersion = yield select(selectors.getCurrentVersion);
    console.info(currentKeys);
    if (currentKeys.indexOf(newKey) == -1) {
        console.info('новый');
        for (let id of setOfId) {
            for (let version of setOfVersion) {
                const person = yield getPersonData(id, version);
                person[newKey] = '';
                yield setNewPerson(id, version, person);
            }
        }
        yield setCurrentKey();
    } else {
        console.info('совпадение');
    }
}

function* changeKeyCurrent(action) {
    const newKey = action.payload;
    const changeKey = yield select(selectors.getChangeKey);
    const searchKey = yield select(selectors.getSearchKey);
    const currentKeys = yield select(selectors.getCurrentKeys);
    const setOfId = yield select(selectors.getSetOfId);
    const currentVersion = yield select(selectors.getCurrentVersion);
    console.info('changeKeyCurrent: ' + currentKeys.indexOf(newKey));
    if (currentKeys.indexOf(newKey) == -1) {
        if (newKey != searchKey) {
            for (let id of setOfId) {
                const person = yield getPersonData(id, currentVersion);
                person[newKey] = person[changeKey];
                delete person[changeKey];
                yield setNewPerson(id, currentVersion, person);
            }
            yield setCurrentKey();
        }
    } else {
        console.info('совпадение');
    }
}

function* changeKeyAll(action) {
    const newKey = action.payload;
    const changeKey = yield select(selectors.getChangeKey);
    const searchKey = yield select(selectors.getSearchKey);
    const currentKeys = yield select(selectors.getCurrentKeys);
    const setOfId = yield select(selectors.getSetOfId);
    const setOfVersion = yield select(selectors.getSetOfVersion);
    if (currentKeys.indexOf(newKey) == -1) {
        if (newKey != searchKey) {
            for (let id of setOfId) {
                for (let version of setOfVersion) {
                    const person = yield getPersonData(id, version);
                    person[newKey] = person[changeKey];
                    delete person[changeKey];
                    yield setNewPerson(id, version, person);
                }
            }
        }
        yield setCurrentKey();
    } else {
        console.info('совпадение');
    }
}

function* deleteKeyCurrent() {
    const deleteKey = yield select(selectors.getDeleteKey);
    const searchKey = yield select(selectors.getSearchKey);
    const setOfId = yield select(selectors.getSetOfId);
    const currentVersion = yield select(selectors.getCurrentVersion);
    if (deleteKey != searchKey) {
        for (let id of setOfId) {
            const person = yield getPersonData(id, currentVersion);
            console.info('deleteKey: ' + deleteKey);
            delete person[deleteKey];
            yield setNewPerson(id, currentVersion, person);
        }
        yield setCurrentKey();
    } else {
        console.info('совпадение');
    }
}

function* deleteKeyAll() {
    const deleteKey = yield select(selectors.getDeleteKey);
    const searchKey = yield select(selectors.getSearchKey);
    const setOfId = yield select(selectors.getSetOfId);
    const setOfVersion = yield select(selectors.getSetOfVersion);
    if (deleteKey != searchKey) {
        for (let id of setOfId) {
            for (let version of setOfVersion) {
                const person = yield getPersonData(id, version);
                console.info('deleteKey: ' + deleteKey);
                delete person[deleteKey];
                yield setNewPerson(id, version, person);
            }
        }
        yield setCurrentKey();
    } else {
        console.info('совпадение');
    }
}

function* setNewPerson(id, version, person) {
    console.info(`setNewPerson: ${id}  ${version}  ${JSON.stringify(person)}`);
    const uuid = yield select(selectors.getCurrentUuid);
    try {
        yield postDBRequest(`/updatePerson?uuid=${uuid}&version=${version}&id=${id}`, person);
    } catch (err) {
        console.error(err);
    }
}