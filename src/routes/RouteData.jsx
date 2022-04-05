import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '../Pages/Dashboard';

const RouteData = () => {
  return (
    <Routes>
      <Route exact path='/*' element={<DashboardLayout />} />
    </Routes>
  );
};

export default RouteData;
