import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

import './App.css';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === 'Default' ? DefaultLayout : DefaultLayout;
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
