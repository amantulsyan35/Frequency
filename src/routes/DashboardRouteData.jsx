import { Route, Routes } from 'react-router-dom';

import Homepage from '../Pages/Homepage';

const DashboardRouteData = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
    </Routes>
  );
};

export default DashboardRouteData;
