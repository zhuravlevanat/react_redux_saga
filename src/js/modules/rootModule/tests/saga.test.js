import * as mockActions from '../../../../testUtils/mockData/mockActions';
import watchTestSaga, * as saga from '../saga';
import {
    takeEvery,
} from 'redux-saga/effects';

describe('Test saga', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.createSandbox();
    });

    after(() => {
        sandbox.restore();
    });

    describe('watchTestSaga', () => {
        const generator = watchTestSaga();

        it('should takeEvery TEST_ACTION', () => {
            assert.deepEqual(
                generator.next().value,
                takeEvery(mockActions.testAction().type, saga.testAction)
            );
        });

        it('should be finished', () => {
            assert.isTrue(generator.next().done);
        });
    });

    describe('testAction', () => {
        const action = mockActions.testAction({});
        const generator = saga.testAction(action);

        it('should be finished', () => {
            const stub = sandbox.stub(console, 'log');

            assert.isTrue(generator.next().done);
            sandbox.assert.calledOnce(stub);
        });
    });
});
