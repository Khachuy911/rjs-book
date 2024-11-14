import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { publicRoutes } from './routes';
import './components/GlobalStyle/GlobalStyle.module.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout;
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
