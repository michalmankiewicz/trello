import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../types/redux';
import { Navigate } from 'react-router-dom';
import { selectisAuth } from '../../../store/auth/authSelectors';

// TODO
function RequireAuth() {
  const isAuth = useAppSelector(selectisAuth);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
