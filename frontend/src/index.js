import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DoctorProvider } from './context/DoctorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DoctorProvider>
        <App />
    </DoctorProvider>
  </React.StrictMode>
);

