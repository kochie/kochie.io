import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
	  flexGrow: 1,
	  margin: 0,
  },
};

const Heading = ({ classes, title }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

Heading.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Heading);

