import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Resumen from '../pages/Resumen/Resumen';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Offers from '../pages/Offers/Offers';
import Checkout from '../pages/Checkout/Checkout';
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';


function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      
      <Route path='/mis-ordenes' element={<MisOrdenes />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />
      <Route path='/resumen/:orderId' element={<Resumen />} />

      <Route path='/checkout' element={
        <ProtectedRoute redirectTo='/register'>
          <Checkout />
          
        </ProtectedRoute>
      } />

      <Route path='/offers' element={
        <ProtectedRoute redirectTo='/'>
          <Offers />
          
        </ProtectedRoute>
      } />

      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
