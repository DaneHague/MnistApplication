/*
 *
 * MnistPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SEND_MNIST_PARAMS_TO_API,
} from './constants';

const initialState = fromJS({
});

function mnistPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MNIST_PARAMS_TO_API:
      return state.set('sentToApi?', action.params)
    default:
      return state;
  }
}

export default mnistPageReducer;
