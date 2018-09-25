import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExploreIcon from '@material-ui/icons/Explore';
import '../assets/styles/Footer.css';

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <ExploreIcon className={classes.icon} />
    <Typography className={classes.text}>
      Hello
    </Typography>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const styles = {
  root: {
    backgroundColor: 'lightgrey',
    padding: '1%',
    display: 'flex',
  },
  text: {
    marginLeft: '30%',
  },
  icon: {
    animation: 'spin 1s linear infinite',
  },
};

export default withStyles(styles)(Footer);
