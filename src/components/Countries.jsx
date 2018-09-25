import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tile from './Tile';


const Countries = ({ classes, countries }) => (
  <div className={classes.root}>
    {countries.map(country => (
      <Tile tile={country} />
))}
  </div>
);

Countries.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',
  },
};

export default withStyles(styles)(Countries);
