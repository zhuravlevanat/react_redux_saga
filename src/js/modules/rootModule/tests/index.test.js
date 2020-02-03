import { mapDispatchToProps, mapStateToProps } from '../index.js';
import * as mockActions from '../../../../testUtils/mockData/mockActions';
import * as mockSelectors from '../../../../testUtils/mockData/mockSelectors';

// const Chart = new Index().args; // TODO for UI

const currentState = store.getState();

describe('HOC RootModule', () => {
    let sandbox;
    let dispatch;

    before(() => {
        sandbox = sinon.createSandbox();
        dispatch = sandbox.stub(store, 'dispatch');
    });

    after(() => {
        sandbox.restore();
    });

    it('mapStateToProps should return correct selectors', () => {
        const mockMapStateToProps = state => ({
            test: mockSelectors.testSelector(state),
        });
        const expected = mockMapStateToProps(currentState);
        const actual = mapStateToProps(currentState);
        assert.deepEqual(actual, expected);
    });

    it('mapDispatchToProps should return correct actions', () => {
        const mapDispatchToPropsResult = mapDispatchToProps(dispatch);
        const payload = null;
        Object.keys(mapDispatchToPropsResult).forEach(key => mapDispatchToPropsResult[key](payload));

        assert.equal(dispatch.callCount, 1);

        let call = dispatch.getCall(0);
        assert.deepEqual(mockActions.testAction(payload), call.args[0]);
    });
});
