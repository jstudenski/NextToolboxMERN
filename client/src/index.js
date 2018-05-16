import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'normalize.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
