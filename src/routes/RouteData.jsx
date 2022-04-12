import { Route, Routes } from 'react-router-dom';
import Mockman from 'mockman-js';

import DashboardLayout from '../Pages/Dashboard';
import { Signup, Login } from '../Pages/Authentication';

const RouteData = () => {
  return (
    <Routes>
      <Route exact path='/*' element={<DashboardLayout />} />
      <Route exact path='/user/signup' element={<Signup />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='/mock' element={<Mockman />}></Route>
    </Routes>
  );
};

export default RouteData;
