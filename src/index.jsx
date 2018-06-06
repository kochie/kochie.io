import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';
import config from './config.json';

WebFont.load({
  google: {
    families: ['Roboto Mono'],
  },
});

ReactDOM.render(<App config={config} />, document.getElementById('root'));
