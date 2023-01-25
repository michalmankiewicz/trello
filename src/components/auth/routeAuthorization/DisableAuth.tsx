import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../types/redux';
import { Navigate } from 'react-router-dom';

function DisableAuth() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();

  return isAuth ? <Navigate to="/boards" state={{ from: location }} replace /> : <Outlet />;
}

export default DisableAuth;
