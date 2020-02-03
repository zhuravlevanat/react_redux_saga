import Component from './ModalModule.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    isOpen: selectors.getStatusModal(state),
    versions: selectors.getVersionsArr(state),
    keys: selectors.getCurrentKeys(state),
    // searchKey: selectors.getSearchKey(state),
    changeKey: selectors.getChangeKey(state),
    deleteKey: selectors.getDeleteKey(state),
    currentVersion: selectors.getCurrentVersion(state),
    inputAdd: selectors.getInputAdd(state),
    inputChange: selectors.getInputChange(state),
});

export const mapDispatchToProps = dispatch => ({
    changeModalStatus: payload => dispatch(actions.changeModalStatus(payload)),
    inputAddChange: payload => dispatch(actions.inputAddChange(payload)),
    inputEditChange: payload => dispatch(actions.inputEditChange(payload)),
    addNewKey: payload => dispatch(actions.addNewKey(payload)),
    addNewKeyAll: payload => dispatch(actions.addNewKeyAll(payload)),
    handleChangeKey: payload => dispatch(actions.handleChangeKey(payload)),
    handleDeleteKey: payload => dispatch(actions.handleDeleteKey(payload)),
    changeKeyCurrent: payload => dispatch(actions.changeKeyCurrent(payload)),
    changeKeyAll: payload => dispatch(actions.changeKeyAll(payload)),
    deleteKeyCurrent: () => dispatch(actions.deleteKeyCurrent()),
    deleteKeyAll: () => dispatch(actions.deleteKeyAll()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);