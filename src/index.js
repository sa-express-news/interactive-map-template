import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// components
import App from './components/App';

import 'font-awesome/css/font-awesome.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// Provider is a top-level component that wrapps our entire application.
// We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
