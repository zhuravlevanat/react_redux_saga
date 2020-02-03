'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../roots/rootReducer';
import rootSaga from '../roots/rootSaga';
import configCore from '../config/config';
import RootModule from '../modules/rootModule';
import Strings from '../strings/en';
import styles from '../themes/csTheme';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    document.title = configCore.title;
    setFavIcon(configCore.favIcon);

    const initialState = {
        authData: {
            uuid: '',
            loginData: {
                user: 'admin',
                password: 'root',
                database: 'db_tables',
                table: 'person',
            },
            isLoggedSuccessfully: false,
            userPermissions: {
                read: false,
                write: false,
                create: false,
            },
            errorData: {
                isError: false,
                errorMessage: '',
            },
        },
        configData: {
            currentVersion: configCore.version,
            searchKey: configCore.searchValue,
        },
        themes: {
            theme: styles,
        },
        model: {
            currentId: 1,
            list: [],
            logs: [],
            person: {},
            setOfId: [],
            inputAdd: '',
            inputChange: '',
            changeKey: '',
            deleteKey: '',
        },
        userLocalSettings: {
            setOfVersions: ['variant1', 'variant2', 'variant3', 'variant4'],
            selectedTab: Strings.resources.editorTabName,
            selectEdit: 'List',
            // setOfCurrentKey: ['name', 'age', 'gender', 'address'],
            setOfCurrentKey: [],
        },
        modalWindowData: {
            showModal: false,
        },
    };

    const sagaMiddleware = createSagaMiddleware({
        onError: error => {
            alert('Critical error acquired! See console for more details.');
            console.error(error);
            sagaMiddleware.run(rootSaga);
        },
    });
    // TODO uncomment to work with REDUX
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialState,
        // composeEnhancers(),
        // applyMiddleware(sagaMiddleware),
        composeEnhancers(applyMiddleware(sagaMiddleware)), // TODO uncomment to work with SAGA
    );
    // TODO uncomment to work with SAGA
    sagaMiddleware.run(rootSaga);

    // TODO replace usual render to work with REDUX
    render(
        <Provider store={store}>
            <RootModule/>
        </Provider>,
        document.getElementById('root')
    );
}

export function setFavIcon(src) {
    if (!src) {
        return false;
    }

    const favicon = document.createElement('link');

    favicon.rel = 'icon';
    favicon.href = src;
    document.head.appendChild(favicon);
}
