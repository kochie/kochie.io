import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Halo from '../assets/images/Halo.jpg';
import Planet from '../assets/images/the-gas-giant-2560×1440.jpg';

const tileData = [
  {
    key: 'halo',
    title: 'Halo',
    img: Halo,
    featured: true,
  },
  {
    key: 'planet',
    title: 'planet',
    img: Planet,
    featured: false,
  },
  {
    key: 'planet1',
    title: 'planet',
    img: Planet,
    featured: false,
  }, {
    key: 'planet2',
    title: 'planet',
    img: Planet,
    featured: false,
  }, {
    key: 'planet3',
    title: 'planet',
    img: Planet,
    featured: false,
  },
];

const Portfolio = ({ classes }) => (
  <div className={classes.root}>
    {tileData.map(tile => (
      <div className={[classes.gridItem, tile.featured ? classes.featured : ''].join(' ')} key={tile.key}>
        <img src={tile.img} alt={tile.title} className={classes.img} />
      </div>
        ))}
  </div>
);

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    // justifyContent: 'space-around',
    alignSelf: 'stretch',
    gridGap: 0,
    backgroundColor: theme.palette.background.paper,
  },
  gridItem: {
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  gridList: {
    // width: 500,
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  featured: {
    gridColumn: '2 / 4',
    gridRow: '1 / 3',
  },
});

Portfolio.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(Portfolio);
