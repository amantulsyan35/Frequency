import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { SideBarProvider } from './context/sidebar-context';

ReactDOM.render(
  <React.StrictMode>
    <SideBarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SideBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
