import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Earth from './earth.jpg'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

import Heading from './Heading';

const App = ({classes}) => (
  <div>
    <Heading />
    <div className={classes.contain}>
      <Particles  className={classes.particle} params={particleParams}/>
      <Paper className={classes.title}>
        <Typography>
          Hello
        </Typography>
      </Paper>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.object
}

const particleParams = {
  particles: {
    number: {
      value: 100
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top-right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    opacity: {
      value: 1
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
}

const styles = {
  particle: {
    position: 'absolute',
    backgroundColor: "#37364a",
    backgroundImage: `url(${Earth})`,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    width: '100%'
  },
  contain: {
  },
  title: {
    position: 'absolute',
    marginLeft: "50%",
    marginTop: "25%",
    fontSize: 30
  }
}



export default withStyles(styles, {withTheme: true})(App);
