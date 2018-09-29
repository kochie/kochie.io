import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import Halo from '../assets/images/Halo.jpg';
// import Planet from '../assets/images/the-gas-giant-2560×1440.jpg';
import Tile from './Tile';


const Portfolio = ({ classes, tileData, id }) => (
  <div className={classes.root} id={id}>
    {tileData.map(tile =>
      (<Tile
        key={tile.key}
        tile={tile}
        featuredClass={tile.featuredClass && classes[tile.featuredClass]}
      />))}
  </div>
);

const styles = () => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    alignSelf: 'stretch',
    gridGap: 0,
  },
  gridList: {
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
  featured1: {
    gridColumn: '1 / 3',
    gridRow: '1 / 3',
  },
  featured2: {
    gridColumn: '4 / 6',
    gridRow: '2 / 4',
  },
  featured3: {
    gridColumn: '3 / 4',
    gridRow: '2 / 4',
  },
});

Portfolio.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  tileData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(Portfolio);
