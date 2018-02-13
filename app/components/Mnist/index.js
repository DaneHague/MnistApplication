/**
*
* Mnist
*
*/

import React from 'react';
// import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography/Typography';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '84px',
  },
  paper: {
    padding: theme.spacing.unit * 6,
    height: '100%',
  },
  textField: {
    margin: '16px',
  },
  alignSubmitButton: {
    textAlign: 'right',
    paddingTop: '20px',
  },
  submitButton: {
    backgroundColor: '#e57373',
    '&:hover': {
      backgroundColor: '#ef9a9a'
    }
  },
});


function prev(e) {
  var socket = io.connect('http://localhost:3000');
  e.preventDefault();
}

class Mnist extends React.Component { // eslint-disable-line react/prefer-stateless-function

  saveParams = () => {
    this.props.sendMnistParamsToApi(
      {
        name: this.state.nameVal,
        number: this.state.numVal,
        param3: this.state.param3,
        param4: this.state.param4,
      }
    );
  }

  

  updateStateVal = (evt, id) => {
    this.setState({
      [id]: evt.target.value
    });
  }
  
  render() {
    return (
      <Grid container justify="center" className={this.props.classes.root}>
        <Paper elevation={6} className={this.props.classes.paper}>
          <Typography type="headline" component="h1">
            Enter Mnist parameters
          </Typography>
          <br></br>
          <Typography component="p">
            Please specify the parameters that you want to use. Note: all parmaters must be chosen.
          </Typography>
          <form method="post" action="/MnistPages" onSubmit={prev}>
            <Grid item xs={12}>
              <Tooltip title="This is where you add the name">
                <TextField label="Name" onChange={evt => this.updateStateVal(evt, "nameVal")} className={this.props.classes.textField}></TextField>
              </Tooltip>
              <TextField label="Number" onChange={evt => this.updateStateVal(evt, "numVal")} className={this.props.classes.textField}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Param3" onChange={evt => this.updateStateVal(evt, "param3")} className={this.props.classes.textField}></TextField>
              <TextField label="Param4" onChange={evt => this.updateStateVal(evt, "param4")} className={this.props.classes.textField}></TextField>
            </Grid>
            <Grid item xs={12}  className={this.props.classes.alignSubmitButton}>
              <Button color="primary" type="submit" onClick={this.saveParams} className={this.props.classes.submitButton}>
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

Mnist.propTypes = {
  classes: React.PropTypes.object.isRequired,
  sendMnistParamsToApi: React.PropTypes.func.isRequired,
};

export default withStyles(styles)(Mnist);
