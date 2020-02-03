import Component from './ListPageModule.jsx';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = state => ({
    list: selectors.getListOfPersons(state),
    theme: selectors.getModuleTheme(state),
});

export const mapDispatchToProps = dispatch => ({
    setPersonData: (payload) => dispatch(actions.setPersonData(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
