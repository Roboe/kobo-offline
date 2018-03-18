import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import { queryUpdates } from './helpers/koboapi.js'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

queryUpdates('00000000-0000-0000-0000-000000000375', 'kobo')
  .then((text) => { console.table(text) })
