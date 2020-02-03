import Component from './EditModule.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    currentId: selectors.getCurrentId(state),
    currentVersion: selectors.getCurrentVersion(state),
    SetOfVersion: selectors.getSetOfVersion(state),
    person: selectors.getPerson(state),
    user: selectors.getUser(state),
    uuid: selectors.getCurrentUuid(state),
    theme: selectors.getModuleTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    changePersonDataStore: payload => dispatch(actions.changePersonDataStore(payload)),
    saveChangeEditForm: () => dispatch(actions.saveChangeEditForm()),
    mergeChangeEditForm: () => dispatch(actions.mergeChangeEditForm()),
    setSelectEditStore: payload => dispatch(actions.setSelectEditStore(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
