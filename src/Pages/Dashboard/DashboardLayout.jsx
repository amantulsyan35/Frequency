import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { Sidebar } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import Homepage from '../Homepage';
import Explore from '../Explore';
import VideoPage from '../VideoPage';
import Like from '../Like';
import WatchLater from '../WatchLater';
import Playlist from '../Playlist';

const PrivateRoute = () => {
  const encodedToken = window.localStorage.getItem('encodedToken');

  return encodedToken ? <Outlet /> : <Navigate to='/login' />;
};

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
          <Route exact path='/user' element={<PrivateRoute />}>
            <Route exact path='/user/like' element={<Like />} />
            <Route exact path='/user/watchlater' element={<WatchLater />} />
            <Route exact path='/user/playlist' element={<Playlist />} />
          </Route>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/explore' element={<Explore />} />
          <Route exact path='/video/:videoId' element={<VideoPage />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardLayout;
