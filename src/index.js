import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { SideBarProvider } from './context/sidebar-context';
import { VideoProvider } from './context/video-context';
import { CategoryProvider } from './context/category-context';
import { makeServer } from './server';

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <SideBarProvider>
      <VideoProvider>
        <CategoryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryProvider>
      </VideoProvider>
    </SideBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
