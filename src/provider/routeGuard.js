import React from 'react';

import { Navigate } from 'react-router-dom';

function RouteGuard({ children }) {
  const isAuth = () => {
    const dataStr = sessionStorage.getItem('token');
    const data = JSON.parse(dataStr);
    return data ? true : false;
  };

  return isAuth() ? children : <Navigate to='/login' replace />;
}

export default RouteGuard;
