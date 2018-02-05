import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import withTheme from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLinks: {
    marginRight: 10,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#e57373',
    }
  },
  navButtonWrapper: {
    fontSize: '18px',
    textTransform: 'none',
    color: 'white',
  },
  appBar: {
    backgroundColor: '#e57373',
  }
};

function NavigationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <Link className={classes.navLinks} to="/">
              <Button className={classes.navButtonWrapper}>
                Home
              </Button>
            </Link>
          </Typography>
          <Link className={classes.navLinks} to="/MnistPage">
            <Button className={classes.navButtonWrapper}>
              Mnist Network
            </Button>
          </Link>
          <Link className={classes.navLinks} to="/ResultsPage" color="contrast">
            <Button className={classes.navButtonWrapper}>
              Results
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);

