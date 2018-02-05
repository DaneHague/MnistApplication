/*
 *
 * MnistPage actions
 *
 */

import {
  SAVE_PARAMETERS,
} from './constants';

export function saveParameters(params) {
  return {
    type: SAVE_PARAMETERS,
    params,
  };
}