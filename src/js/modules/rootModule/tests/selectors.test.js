import * as selectors from '../selectors';
import * as mockSelectors from '../../../../testUtils/mockData/mockSelectors';

describe('Test selectors', () => {
    const state = store.getState();

    it('testSelector', () => {
        assert.deepEqual(selectors.testSelector(state), mockSelectors.testSelector(state));
    });
});
