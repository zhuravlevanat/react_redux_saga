import Component from './EditMain.jsx';
import { connect } from 'react-redux';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    selectedTab: selectors.getSelectedTab(state),
    selectEdit: selectors.getSelectEdit(state),
    theme: selectors.getModuleTheme(state),
});

export default connect(
    mapStateToProps,
)(Component);
