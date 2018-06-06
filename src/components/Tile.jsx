import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

import images from '../images';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  render() {
    const { classes, tile, featuredClass } = this.props;
    return (
      <div
        onMouseEnter={() => {
            this.setState({ isHover: true });
          }}
        onMouseLeave={() => {
            this.setState({ isHover: false });
        }}
        className={[classes.gridItem, featuredClass].join(' ')}
      >
        <img src={images[tile.img]} alt={tile.title} className={[classes.img, this.state.isHover ? classes.imgHover : classes.imgNoHover].join(' ')} />
        <div className={[classes.text, this.state.isHover ? classes.textVisible : classes.textHidden].join(' ')}>
          <div>
            <Typography variant="title" className={[classes.font, classes.title].join(' ')}>
              <a className={classes.anchor} href="https://google.com">{tile.title}</a>
            </Typography>
            <Typography className={classes.font}>
              {tile.content}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  tile: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    featuredClass: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  featuredClass: PropTypes.string,
};

Tile.defaultProps = {
  featuredClass: '',
};

const styles = {
  gridItem: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2a2f4a',
    position: 'relative',
  },
  anchor: {
    color: 'white',
  },
  textHidden: {
    opacity: 0,
  },
  textVisible: {
    opacity: 1,
  },
  text: {
    transition: 'opacity 1s ease',
    display: 'flex',
    position: 'absolute',
    color: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 10,
    top: 0,
    left: 0,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',
    position: 'relative',
  },
  imgHover: {
    opacity: 0.3,
  },
  imgNoHover: {
    opacity: 1,
  },
  font: {
    fontFamily: 'Roboto Mono',
    color: 'white',
  },
  title: {
    paddingBottom: 7,
  },
};

export default withStyles(styles)(Tile);
