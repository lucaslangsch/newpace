import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ScrollToTop from "./helpers/scrollToTop";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
