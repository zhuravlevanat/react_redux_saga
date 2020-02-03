import Component from './Header.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    setOfVersions: selectors.getVersions(state),
    theme: selectors.getModuleTheme(state),
    isOpen: selectors.getStatusModal(state),
    currentVersion: selectors.getCurrentVersion(state),
    searchKey: selectors.getSearchKey(state),
    arrId: selectors.getArrId(state),
    uuid: selectors.getUuid(state),
});

export const mapDispatchToProps = dispatch => ({
    changeCurrentVersion: payload => dispatch(actions.changeCurrentVersion(payload)),
    logout: () => dispatch(actions.logout()),
    changeModalStatus: payload => dispatch(actions.changeModalStatus(payload)),
    setOfCurrentKey: () => dispatch(actions.setOfCurrentKey()),
    setOfId: () => dispatch(actions.setOfId()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
