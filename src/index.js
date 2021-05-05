import React from 'react';
import { render } from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, fieldValue } from './library/firebase';

render(
  <FirebaseContext.Provider value={{ firebase, fieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
