import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Context from './context/Context.js'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Context>
        <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

