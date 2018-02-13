/**
 *
 * MnistPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MnistForm from '../../components/Mnist/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMnistPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { sendMnistParamsToApi } from './actions';

export class MnistPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MnistForm {...this.props} />
    );
  }
}

MnistPage.propTypes = {
  sendMnistParamsToApi: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mnistpage: makeSelectMnistPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendMnistParamsToApi: (params) => dispatch(sendMnistParamsToApi(params)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mnistPage', reducer });
const withSaga = injectSaga({ key: 'mnistPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MnistPage);
