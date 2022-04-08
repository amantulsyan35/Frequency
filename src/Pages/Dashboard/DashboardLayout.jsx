import { Route, Routes } from 'react-router-dom';
import './Dashboard.css';
import { Sidebar } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import Homepage from '../Homepage';
import Explore from '../Explore/Explore';

const DashboardLayout = () => {
  const { sideBarState } = useSideBar();
  return (
    <>
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
          <Route exact path='/explore' element={<Explore />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardLayout;
