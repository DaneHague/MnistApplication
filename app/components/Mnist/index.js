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
<<<<<<< HEAD
    var socket = io.connect('http://localhost:3000');
    socket.emit('Mnist Parameters', this.state);
=======
>>>>>>> 69c77d7a6dbf8800d8b71dfc41adaf0fbe3b64a1
    this.props.sendMnistParamsToApi(
      {
        epochs: this.state.epochs,
        batchSize: this.state.batchSize,
        l1Neurons: this.state.l1Neurons,
        l2Neurons: this.state.l2Neurons,
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
                <TextField label="Epochs" onChange={evt => this.updateStateVal(evt, "epochs")} className={this.props.classes.textField}></TextField>
              </Tooltip>
              <TextField label="Batch Size" onChange={evt => this.updateStateVal(evt, "batchSize")} className={this.props.classes.textField}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Layer1 Neurons" onChange={evt => this.updateStateVal(evt, "l1Neurons")} className={this.props.classes.textField}></TextField>
              <TextField label="Layer2 Neurons" onChange={evt => this.updateStateVal(evt, "l2Neurons")} className={this.props.classes.textField}></TextField>
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
