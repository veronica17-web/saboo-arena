import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit/';
import { hydrate, render } from 'react-dom';
import App from './App';
import { products } from './constants';
import compareSlice from './redux/compareSlice';

const store = configureStore({
  reducer: {
    vehicles: products,
    compare: compareSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>

);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
