import Component from './MainModule.jsx';
import { connect } from 'react-redux';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    theme: selectors.getModuleTheme(state),
});

export default connect(
    mapStateToProps,
)(Component);
