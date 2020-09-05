import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// import 'semantic-ui-css/semantic.min.css';
import './assets/scss/index.scss';

import App from './App';

const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
