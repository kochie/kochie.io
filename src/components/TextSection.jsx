import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TextSection = ({ classes }) => (
  <div className={classes.container}>
    <Grid container justify="center" alignItems="center" className={classes.gridContainer}>
      <Grid item>
        <Paper>
          <Typography>
            Hello There
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

TextSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const styles = {
  container: {
    height: '50vh',
    backgroundColor: '#2a2f4a',
  },
  gridContainer: {
    height: '100%',
  },
};

export default withStyles(styles, { withTheme: true })(TextSection);
