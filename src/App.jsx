import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { privateRoutes, publicRoutes } from './routes';
import './components/GlobalStyle/GlobalStyle.module.scss';
import LoginLayout from './components/Layouts/LoginLayout/LoginLayout';
import RouteGuard from './provider/routeGuard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map((route, index) => {
          const Layout = route.layout ? route.layout : LoginLayout;
          const Pages = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <RouteGuard>
                  <Layout>
                    <Pages />
                  </Layout>
                </RouteGuard>
              }
            />
          );
        })}
        {publicRoutes.map((route, index) => {
          const Layout = route.layout ? route.layout : LoginLayout;
          const Pages = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Pages />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
