import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { publicRoutes } from './routes';
import './components/GlobalStyle/GlobalStyle.module.scss';
import LoginLayout from './components/Layouts/LoginLayout';
import useToken from './hooks/useToken/useToken';
import Login from './pages/Login/login.tsx';

function App() {
  const {token, setToken} = useToken();
  console.log(token);
  if(!token) return <Login setToken={setToken}></Login>
  return (
    <BrowserRouter>
      <Routes>
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
