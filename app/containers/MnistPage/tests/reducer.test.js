
import { fromJS } from 'immutable';
import mnistPageReducer from '../reducer';

describe('mnistPageReducer', () => {
  it('returns the initial state', () => {
    expect(mnistPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
