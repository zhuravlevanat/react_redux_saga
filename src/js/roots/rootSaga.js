import {
    all,
    call,
} from 'redux-saga/effects';
// import loginModuleSaga from '../modules/loginModule/saga';
// import headerModuleSaga from '../modules/headerModule/saga';
// import tabsetModuleSaga from '../modules/tabsetModule/saga';
// import listModuleSaga from '../modules/listPageModule/saga';
// import editModuleSaga from '../modules/editModule/saga';
import modelSaga from '../model/model';
import connectorSaga from '../connector/connector';

const sagasList = [
    // loginModuleSaga,
    // headerModuleSaga,
    // tabsetModuleSaga,
    // listModuleSaga,
    // editModuleSaga,
    modelSaga,
    connectorSaga,
];

export default function* watchRootSaga() {
    yield all(sagasList.map(saga => call(saga)));
}
