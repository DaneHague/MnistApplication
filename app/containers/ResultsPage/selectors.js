import { createSelector } from 'reselect';

/**
 * Direct selector to the resultsPage state domain
 */
const selectResultsPageDomain = (state) => state.get('resultsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResultsPage
 */

const makeSelectResultsPage = () => createSelector(
  selectResultsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectResultsPage;
export {
  selectResultsPageDomain,
};
