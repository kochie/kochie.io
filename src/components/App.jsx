import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

import Title from './Title';
import Heading from './Heading';
import TextSection from './TextSection';
import Portfolio from './Portfolio';
import Countries from './Countries';
import Contact from './Contact';
import Footer from './Footer';

const sections = [{name:"About"}, {name:"Portfolio"}, {name:"Locations"}, {name:"Contact"}]

const App = ({ config }) => (
  <div>
    <CssBaseline />
    <Heading title={config.title} sections={sections}/>
    <Title />
    <TextSection id="about" />
    <Portfolio tileData={config.Portfolio} id="portfolio"/>
    <TextSection />
    <Countries countries={config.Countries} id="locations"/>
    <TextSection />
    <Contact emailAddress="robert@kochie.io" id="contact"/>
    <Footer />
  </div>
);

App.propTypes = {
  config: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default App;
