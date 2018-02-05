import { createSelector } from 'reselect';

/**
 * Direct selector to the mnistPage state domain
 */
const selectMnistPageDomain = (state) => state.get('mnistPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MnistPage
 */

const makeSelectMnistPage = () => createSelector(
  selectMnistPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMnistPage;
export {
  selectMnistPageDomain,
};
