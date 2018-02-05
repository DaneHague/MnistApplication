
import { fromJS } from 'immutable';
import resultsPageReducer from '../reducer';

describe('resultsPageReducer', () => {
  it('returns the initial state', () => {
    expect(resultsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
