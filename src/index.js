import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import FirmwareDownloadList from './components/FirmwareDownloadList.js'

ReactDOM.render(
  <FirmwareDownloadList />,
  document.getElementById('react--firmware-downloads-list'),
);
