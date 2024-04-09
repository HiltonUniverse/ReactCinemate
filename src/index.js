import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ScrollToTop} from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </HelmetProvider>
);