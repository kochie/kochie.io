import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import PropTypes from 'prop-types';

import Title from './Title';
import Heading from './Heading';
import TextSection from './TextSection';
import Portfolio from './Portfolio';
import Countries from './Countries';
import Contact from './Contact';
import Footer from './Footer';

const App = ({ config }) => (
  <div>
    <CssBaseline />
    <Heading title={config.title} />
    <Title />
    <TextSection />
    <Portfolio tileData={config.Portfolio} />
    <TextSection />
    <Countries countries={config.Countries} />
    <TextSection />
    <Contact emailAddress="robert@kochie.io" />
    <Footer />
  </div>
);

App.propTypes = {
  config: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default App;
