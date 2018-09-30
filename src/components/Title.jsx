import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import Logo from '../logo.svg';
import images from '../images';

const Title = ({ classes, particleParams }) => (
  <div className={classes.container}>
    <div id="top" className={classes.list} />
    <Particles className={classes.particle} params={particleParams} />
    <div className={classes.title}>
      <img src={Logo} alt="koch.ie" className={classes.logo} />
    </div>
  </div>
);

Title.defaultProps = {
  particleParams: {
    particles: {
      number: {
        value: 100,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'top-right',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
      opacity: {
        value: 1,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 250, size: 0, duration: 2, opacity: 0, speed: 3,
        },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  },
};

Title.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  particleParams: PropTypes.objectOf(PropTypes.object),
};

const styles = {
  particle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 'calc(100vh - 64px)',
    backgroundColor: '#37364a',
    backgroundImage: `url(${images.earth})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    position: 'relative',
    top: '64px',
    left: 0,
    height: 'calc(100vh - 64px)',
  },
  logo: {
    position: 'absolute',
    pointerEvents: 'none',
    width: '500px',
    height: '500px',
  },
  list: {
    position: 'relative',
    top: -64,
  },
};

export default withStyles(styles, { withStyles: true })(Title);
