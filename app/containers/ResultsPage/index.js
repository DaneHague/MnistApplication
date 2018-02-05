/**
 *
 * ResultsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectResultsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Results from '../../components/Results';

export class ResultsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Results />
    );
  }
}

ResultsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  resultspage: makeSelectResultsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'resultsPage', reducer });
const withSaga = injectSaga({ key: 'resultsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ResultsPage);
