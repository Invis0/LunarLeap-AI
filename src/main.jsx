import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 