import Component from './RootModule.jsx';
import { connect } from 'react-redux';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    theme: selectors.getModuleTheme(state),
    isLoggedSuccessfully: selectors.getAuthState(state),
});

export default connect(
    mapStateToProps
)(Component);
