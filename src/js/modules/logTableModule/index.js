import Component from './LogModule.jsx';
import { connect } from 'react-redux';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    logentry: selectors.getLogentry(state),
    theme: selectors.getModuleTheme(state),
});

export default connect(
    mapStateToProps
)(Component);
