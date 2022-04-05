import { Route, Routes } from 'react-router-dom';

import './Dashboard.css';

import { Sidebar } from '../../components';
import { useSideBar } from '../../context/sidebar-context';

import Homepage from '../Homepage';
import React from 'react';

const DashboardLayout = () => {
  const { sideBarState } = useSideBar();
  return (
    <React.Fragment>
      <Sidebar />
      <div
        className={
          sideBarState.showSideBar
            ? 'Dashboard-layout'
            : 'Dashboard-layout-full'
        }
      >
        <Routes>
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
