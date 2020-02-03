import Component from './LoginModule.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    loginData: selectors.getLoginData(state),
    errorData: selectors.getErrorData(state),
    theme: selectors.getModuleTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    changeLoginData: payload => dispatch(actions.changeLoginData(payload)),
    changeAuthState: payload => dispatch(actions.changeAuthState(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
