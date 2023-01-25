import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../types/redux';
import { Navigate } from 'react-router-dom';

function RequireAuth() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
