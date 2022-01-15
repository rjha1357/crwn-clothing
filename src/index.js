import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';   // provider is an component class that we get from redux  

import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store.js';


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>

    </BrowserRouter>
  </Provider>,


  // </React.StrictMode>,
  document.getElementById('root')
);

