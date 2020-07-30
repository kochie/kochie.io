import React from 'react';
import WebFont from 'webfontloader';

import App from '../components/App';
import config from '../config.json';

WebFont.load({
  google: {
    families: ['Roboto Mono'],
  },
});

const Index = () => {
  return (
    <App config={config} />
  )
}

export default Index