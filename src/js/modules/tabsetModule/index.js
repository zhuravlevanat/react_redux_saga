import Component from './TabsetModule.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    selectedTab: selectors.getSelectedTab(state),
    theme: selectors.getModuleTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    changeSelectedTab: payload => dispatch(actions.changeSelectedTab(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
