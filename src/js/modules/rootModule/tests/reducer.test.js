import reducer from '../reducer';
import * as actions from '../../../../testUtils/mockData/mockActions';

describe('Test reducer', () => {
    it('default', () => {
        const state = {};
        assert.deepStrictEqual(reducer(state, {}), state);
    });

    it('TEST_ACTION', () => {
        const state = {};

        const action = actions.testAction({});

        assert.deepStrictEqual(reducer(state, action), state);
    });
});
