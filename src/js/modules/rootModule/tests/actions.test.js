import * as actions from '../actions';
import * as mockActions from '../../../../testUtils/mockData/mockActions';

describe('Test actions', () => {
    it('testAction', () => {
        assert.deepEqual(actions.testAction({}), mockActions.testAction({}));
    });
});
