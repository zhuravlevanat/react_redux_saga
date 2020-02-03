import { applyMiddleware, createStore } from 'redux';
import rootSaga from '../js/roots/rootSaga';
import rootReducer from '../js/roots/rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    test: {},
};

global.store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
