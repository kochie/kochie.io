import React from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
      <GridListTile key={tile.key} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
            title={tile.title}
            titlePosition="top"
            actionIcon={
              <IconButton className={classes.icon}>
                <StarBorderIcon />
              </IconButton>
              }
            actionPosition="left"
            className={classes.titleBar}
          />
      </GridListTile>
        ))}
  </div>
);

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
});

Portfolio.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(Portfolio);
