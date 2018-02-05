/*
 *
 * MnistPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SAVE_PARAMETERS,
} from './constants';

const initialState = fromJS({
});

function mnistPageReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PARAMETERS:
      return state.set('Parameters', action.params)
    default:
      return state;
  }
}

export default mnistPageReducer;
