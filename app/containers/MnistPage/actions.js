/*
 *
 * MnistPage actions
 *
 */

import {
  SEND_MNIST_PARAMS_TO_API,
} from './constants';

export function sendMnistParamsToApi(params) {
  return {
    type: SEND_MNIST_PARAMS_TO_API,
    params,
  };
}