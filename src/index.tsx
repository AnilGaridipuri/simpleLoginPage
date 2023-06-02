import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <App />
  </React.StrictMode>
);

