import { Route, Routes } from 'react-router-dom';
import Mockman from 'mockman-js';

import DashboardLayout from '../Pages/Dashboard';

const RouteData = () => {
  return (
    <Routes>
      <Route exact path='/*' element={<DashboardLayout />} />
      <Route path='/mock' element={<Mockman />}></Route>
    </Routes>
  );
};

export default RouteData;
