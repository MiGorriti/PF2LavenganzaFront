import React from 'react';
import App from './App.jsx';
import './index.css';
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { store } from './Redux/store/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </Provider>
);
