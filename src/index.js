import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

// Might need to load the initial state from the API
const store = configureStore({
  articles: {},
  audio: {currentTrackId: 0}
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
