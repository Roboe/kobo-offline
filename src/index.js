import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import FirmwareDownloadList from './components/FirmwareDownloadList.js'
import DictionaryDownloadList from './components/DictionaryDownloadList.js'

ReactDOM.render(
  <FirmwareDownloadList />,
  document.getElementById('react--firmware-downloads-list'),
);

ReactDOM.render(
  <DictionaryDownloadList />,
  document.getElementById('react--dictionary-downloads-list'),
);
