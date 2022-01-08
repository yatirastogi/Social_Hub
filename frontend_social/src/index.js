import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Create from "../src/pages/create/create"
import Store,{ AuthContext } from "./context/AuthContext";
ReactDOM.render(
  <React.StrictMode>
    <Store>
    <App />

    </Store>

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
