import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import Title from './Title';
import Heading from './Heading';
import TextSection from './TextSection';
import Portfolio from './Portfolio';

const App = ({ classes }) => (
  <div>
    <CssBaseline />
    <Heading />
    <Title />
    <TextSection />
    <Portfolio />
  </div>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const styles = {};


export default withStyles(styles, { withTheme: true })(App);
